import {all, fork} from 'redux-saga/effects';
import * as userWishes from './user-wishes';
import * as soundManager from './sound-manager';
import * as app from './app';

//---
// Root saga
//---
export function* rootSaga() {
  yield all(
    [app.rootSaga, userWishes.rootSaga, soundManager.rootSaga].map(fork),
  );
}
