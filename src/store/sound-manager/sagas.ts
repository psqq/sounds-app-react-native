import {put, takeEvery, takeLatest, all, select} from 'redux-saga/effects';
import Sound from 'react-native-sound';

import {RootState} from '..';
import {
  PLAY_MUSIC,
  PlayMusicAction,
  PAUSE_MUSIC,
  PauseMusicAction,
  CLEAR_MUSIC,
  RESUME_MUSIC,
  ResumeMusicAction,
} from './types';
import {getOrLoadSound} from 'src/z-modules/sounds-cache';
import {findInPlaylistByName} from 'src/store/sound-manager/playlist';

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
    promises.push(getOrLoadSound(soundOfMusic.sound.resource));
  }
  result = yield Promise.all(promises);
  return result;
}

//---
// Play music
//---
function* playMusic(action: PlayMusicAction) {
  const state = yield* getState();
  const soundsOfCurrentMusic = yield* getAllSoundOfCurrentMusic(state);
  soundsOfCurrentMusic.forEach((sound) => sound.stop());
  yield put({type: CLEAR_MUSIC});
  yield put({type: CLEAR_MUSIC});
  const sound: Sound = yield getOrLoadSound(
    findInPlaylistByName(action.payload.name).resource,
  );
  sound.play();
}

export function* watchPlayMusic() {
  yield takeEvery(PLAY_MUSIC, playMusic);
}

//---
// Pause music
//---
function* pauseMusic(action: PauseMusicAction) {
  const state = yield* getState();
  const soundsOfCurrentMusic = yield* getAllSoundOfCurrentMusic(state);
  soundsOfCurrentMusic.forEach((sound) => sound.pause());
}

export function* watchPauseMusic() {
  yield takeEvery(PAUSE_MUSIC, resumeMusic);
}

//---
// Resume music
//---
function* resumeMusic(action: ResumeMusicAction) {
  const state = yield* getState();
  const soundsOfCurrentMusic = yield* getAllSoundOfCurrentMusic(state);
  soundsOfCurrentMusic.forEach((sound) => sound.play());
}

export function* watchResumeMusic() {
  yield takeEvery(RESUME_MUSIC, resumeMusic);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchPlayMusic(), watchPauseMusic(), watchResumeMusic()]);
}
