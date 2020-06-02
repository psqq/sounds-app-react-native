import {all} from 'redux-saga/effects';
import * as userWishes from './user-wishes';

//---
// Root saga
//---
export function* rootSaga() {
  yield all([userWishes.rootSaga()]);
}
