import {all} from 'redux-saga/effects';
import * as userWishes from './user-wishes';
import * as soundManager from './sound-manager';

//---
// Root saga
//---
export function* rootSaga() {
  yield all([userWishes.rootSaga(), soundManager.rootSaga()]);
}
