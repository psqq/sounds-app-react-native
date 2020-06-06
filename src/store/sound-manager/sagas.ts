import Sound from 'react-native-sound';
import {all, put, select, takeEvery} from 'redux-saga/effects';
import {findMixByName} from 'src/data/mixes';
import {SoundItem} from 'src/data/sounds';
import * as soundsCache from 'src/z-modules/sounds-cache';
import {RootState} from '..';
import {initTimerAction, resumeTimerAction} from '../timer/types';
import {
  CachedSound,
  clearCurrentMixAction,
  pauseCurrentMixAction,
  playCurrentMixAction,
  resumeCurrentMixAction,
  setCachedSoundsAction,
  setCurrentMixAction,
  setCurrentMixIsPlayingAction,
  setIsCachedAction,
  stopCurrentMixAction,
} from './types';

Sound.setCategory('Playback');

//---
// Get store state for type resolving
//---
function* getState() {
  return (yield select()) as RootState;
}

//---
// Stop and remove sound in current mix
//---
function* stopAndRemoveSoundsInCurrentMix() {
  const state = yield* getState();
  const currentMix = state.soundManager.currentMix;
  if (currentMix.cached && currentMix.soundsInCache) {
    yield Promise.all(
      currentMix.soundsInCache.map((s) => soundsCache.stopAndRemove(s.cacheId)),
    );
  }
}

//---
// Stop current mix
//---
function* stopCurrentMix() {
  yield* stopAndRemoveSoundsInCurrentMix();
  yield put(clearCurrentMixAction());
}

function* watchStopCurrentMix() {
  yield takeEvery(stopCurrentMixAction.type, stopCurrentMix);
}

//---
// Play current mix
//---
async function cacheSounds(
  sounds: SoundItem[],
  setup?: (sound: Sound) => void,
) {
  const cachedSounds: CachedSound[] = await Promise.all(
    sounds.map((s) =>
      soundsCache.loadSound(s.sound, setup).then(
        (id): CachedSound => ({
          soundId: s.id,
          cacheId: id,
        }),
      ),
    ),
  );
  return cachedSounds;
}

function* playCurrentMix(action: ReturnType<typeof playCurrentMixAction>) {
  const nextMix = findMixByName(action.payload.name);
  const state = yield* getState();
  if (
    !nextMix ||
    nextMix.sounds.length < 1 ||
    state.soundManager.currentMix.mix.id === nextMix.id
  ) {
    return;
  }
  yield* stopAndRemoveSoundsInCurrentMix();
  yield put(initTimerAction({duration: 15 * 60 * 1000, paused: true}));
  const cachedSounds: CachedSound[] = yield cacheSounds(
    nextMix.sounds,
    (sound) => {
      sound.setNumberOfLoops(-1);
    },
  );
  yield put(setCurrentMixAction({mix: nextMix}));
  cachedSounds.forEach((s) => {
    soundsCache.getSound(s.cacheId).play();
  });
  yield put(setCachedSoundsAction({soundsInCache: cachedSounds}));
  yield put(setIsCachedAction({cached: true}));
  yield put(setCurrentMixIsPlayingAction({isPlaying: true}));
  yield put(resumeTimerAction());
}

function* watchPlayCurrentMix() {
  yield takeEvery(playCurrentMixAction.type, playCurrentMix);
}

//---
// Pause current mix
//---
function* pauseCurrentMix() {
  const state = yield* getState();
  state.soundManager.currentMix.soundsInCache.forEach((s) => {
    soundsCache.getSound(s.cacheId).pause();
  });
  yield put(setCurrentMixIsPlayingAction({isPlaying: false}));
}

function* watchPauseCurrentMix() {
  yield takeEvery(pauseCurrentMixAction.type, pauseCurrentMix);
}

//---
// Resume current mix
//---
function* resumeCurrentMix() {
  const state = yield* getState();
  state.soundManager.currentMix.soundsInCache.forEach((s) => {
    soundsCache.getSound(s.cacheId).play();
  });
  yield put(setCurrentMixIsPlayingAction({isPlaying: true}));
}

function* watchResumeCurrentMix() {
  yield takeEvery(resumeCurrentMixAction.type, resumeCurrentMix);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([
    watchPlayCurrentMix(),
    watchPauseCurrentMix(),
    watchResumeCurrentMix(),
    watchStopCurrentMix(),
  ]);
}
