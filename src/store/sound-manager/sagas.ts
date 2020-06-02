import {put, takeEvery, takeLatest, all, select} from 'redux-saga/effects';
import Sound from 'react-native-sound';

import {RootState} from '..';
import {
  PLAY_SOUND,
  PlaySoundAction,
  PAUSE_SOUND,
  PauseSoundAction,
} from './types';
import {getOrLoadSound} from 'src/z-modules/sounds-cache';

Sound.setCategory('Playback');

//---
// Get store state for type resolving
//---
function* getState() {
  const state: RootState = yield select();
  return state;
}

//---
// Play sound
//---
function* playSound(action: PlaySoundAction) {
  const sound: Sound = yield getOrLoadSound(action.payload);
  sound.play();
}

export function* watchPlaySound() {
  yield takeEvery(PLAY_SOUND, playSound);
}

//---
// Pause sound
//---
function* pauseSound(action: PauseSoundAction) {
  const sound: Sound = yield getOrLoadSound(action.payload);
  sound.play();
}

export function* watchPauseSound() {
  yield takeEvery(PAUSE_SOUND, pauseSound);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchPlaySound(), watchPauseSound()]);
}
