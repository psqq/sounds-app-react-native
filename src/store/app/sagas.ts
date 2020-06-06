import {all, put, select, takeLatest} from 'redux-saga/effects';
import {RootState} from '..';
import {loadUserWishesFromStorageAction} from '../user-wishes/types';
import {initAppAction} from './types';

//---
// Get store state for type resolving
//---
function* getState() {
  return (yield select()) as RootState;
}

//---
// Initialize app
//---
function* initApp() {
  yield put(loadUserWishesFromStorageAction());
}

export function* watchInitApp() {
  yield takeLatest(initAppAction.type, initApp);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchInitApp()]);
}
