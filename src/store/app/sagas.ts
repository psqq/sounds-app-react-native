import {put, takeEvery, takeLatest, all, select} from 'redux-saga/effects';
import {initAppAction} from './types';
import {loadUserWishesFromStorageAction} from '../user-wishes/types';
import {RootState} from '..';

//---
// Get store state for type resolving
//---
function* getState() {
  return (yield select()) as RootState;
}

//---
// Save user wishes to storage
//---
function* initApp() {
  yield put(loadUserWishesFromStorageAction());
}

export function* watchInitApp() {
  yield takeEvery(initAppAction.type, initApp);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchInitApp()]);
}
