import {put, takeEvery, takeLatest, all, select} from 'redux-saga/effects';
import Sound from 'react-native-sound';

import {RootState} from '..';
import {getOrLoadSound} from 'src/z-modules/sounds-cache';
import {findInPlaylistByName} from 'src/store/sound-manager/playlist';
import {
  resumeMusicAction,
  pauseMusicAction,
  playMusicAction,
  clearMusicAction,
} from './types';

Sound.setCategory('Playback');

//---
// Get store state for type resolving
//---
function* getState() {
  return (yield select()) as RootState;
}

//---
// Get all sounds of current music
//---
function* getAllSoundOfCurrentMusic(state: RootState) {
  let result: Sound[] = [];
  if (!state.soundManager.currentMusic) {
    return result;
  }
  const promises = [];
  for (let soundOfMusic of state.soundManager.currentMusic.sounds) {
    promises.push(getOrLoadSound(soundOfMusic.sound.sound));
  }
  result = yield Promise.all(promises);
  return result;
}

//---
// Play music
//---
function* playMusic(action: ReturnType<typeof playMusicAction>) {
  const state = yield* getState();
  const soundsOfCurrentMusic = yield* getAllSoundOfCurrentMusic(state);
  soundsOfCurrentMusic.forEach((sound) => sound.stop());
  yield put(clearMusicAction());
  const sound: Sound = yield getOrLoadSound(
    findInPlaylistByName(action.payload.name).sound,
  );
  yield put();
  sound.play();
}

export function* watchPlayMusic() {
  yield takeEvery(playMusicAction.type, playMusic);
}

//---
// Pause music
//---
function* pauseMusic(action: ReturnType<typeof pauseMusicAction>) {
  const state = yield* getState();
  const soundsOfCurrentMusic = yield* getAllSoundOfCurrentMusic(state);
  soundsOfCurrentMusic.forEach((sound) => sound.pause());
}

export function* watchPauseMusic() {
  yield takeEvery(pauseMusicAction.type, pauseMusic);
}

//---
// Resume music
//---
function* resumeMusic(action: ReturnType<typeof resumeMusicAction>) {
  const state = yield* getState();
  const soundsOfCurrentMusic = yield* getAllSoundOfCurrentMusic(state);
  soundsOfCurrentMusic.forEach((sound) => sound.play());
}

export function* watchResumeMusic() {
  yield takeEvery(resumeMusicAction.type, resumeMusic);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchPlayMusic(), watchPauseMusic(), watchResumeMusic()]);
}
