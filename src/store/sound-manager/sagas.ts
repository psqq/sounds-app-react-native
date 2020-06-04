import Sound from 'react-native-sound';
import {all, put, select, takeEvery} from 'redux-saga/effects';
import {getOrLoadSound} from 'src/z-modules/sounds-cache';
import {RootState} from '..';
import {soundMixes} from 'src/data/mixes';
import {SoundItem} from 'src/data/sounds';
import {
  clearCurrentMixAction,
  pauseCurrentMixAction,
  playCurrentMixAction,
  resumeCurrentMixAction,
  setCurrentMixAction,
  setCurrentMixIsPlayingAction,
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
// Get all sounds as react-native-sound Sound objects
//---
function* getAllSounds(sounds: SoundItem[]) {
  let result: Sound[] = [];
  const promises: Promise<Sound>[] = [];
  for (let soundItem of sounds) {
    promises.push(getOrLoadSound(soundItem.sound));
  }
  result = yield Promise.all(promises);
  return result;
}

//---
// Stop current mix
//---
function* stopCurrentMix() {
  const state = yield* getState();
  const soundsOfCurrentMix = yield* getAllSounds(
    state.soundManager.currentMix.mix.sounds,
  );
  soundsOfCurrentMix.forEach((sound) => sound.stop());
  yield put(setCurrentMixIsPlayingAction({isPlaying: false}));
  yield put(clearCurrentMixAction());
}

function* watchStopCurrentMix() {
  yield takeEvery(stopCurrentMixAction.type, stopCurrentMix);
}

//---
// Play current mix
//---
function* playCurrentMix(action: ReturnType<typeof playCurrentMixAction>) {
  yield put(stopCurrentMixAction());
  const nextMix = soundMixes.find(
    (x) =>
      x.title.toLocaleLowerCase() === action.payload.name.toLocaleLowerCase(),
  );
  if (!nextMix || nextMix.sounds.length < 1) {
    return;
  }
  const soundsOfNextMix: Sound[] = yield* getAllSounds(nextMix.sounds);
  yield put(setCurrentMixAction({mix: nextMix}));
  soundsOfNextMix.forEach((sound) => {
    sound.setNumberOfLoops(-1);
    sound.play();
  });
  yield put(setCurrentMixIsPlayingAction({isPlaying: true}));
}

function* watchPlayCurrentMix() {
  yield takeEvery(playCurrentMixAction.type, playCurrentMix);
}

//---
// Pause current mix
//---
function* pauseCurrentMix() {
  const state = yield* getState();
  const soundsOfCurrentMix = yield* getAllSounds(
    state.soundManager.currentMix.mix.sounds,
  );
  soundsOfCurrentMix.forEach((sound) => sound.pause());
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
  const soundsOfCurrentMix = yield* getAllSounds(
    state.soundManager.currentMix.mix.sounds,
  );
  soundsOfCurrentMix.forEach((sound) => sound.play());
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
