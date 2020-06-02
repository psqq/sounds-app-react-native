import {put, takeEvery, takeLatest, all, select} from 'redux-saga/effects';
import {RootState} from '..';
import {PLAY_SOUND} from './types';

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
function* playSound() {}

export function* watchPlaySound() {
  yield takeEvery(PLAY_SOUND, playSound);
}

//---
// Pause sound
//---
function* pauseSound() {}

export function* watchPauseSound() {
  yield takeEvery(PLAY_SOUND, pauseSound);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchPlaySound(), watchPauseSound()]);
}
