import {put, takeEvery, takeLatest, all, select} from 'redux-saga/effects';
import {SAVE_TO_STORAGE} from './user-wishes/types';
import {RootState} from '.';
import AsyncStorage from '@react-native-community/async-storage';
import {setSaved} from './user-wishes/actions';

//---
// Get store state for type resolving
//---
function* getState() {
  const state: RootState = yield select();
  return state;
}

//---
// Save user wishes to storage
//---
const USER_WISHES_KEY_IN_STORAGE = 'user-wishes';

function* saveToStorage() {
  const state = yield* getState();
  const wishes = state.userWishes.wishes;
  const dataToSave = JSON.stringify(wishes);
  yield AsyncStorage.setItem(USER_WISHES_KEY_IN_STORAGE, dataToSave);
  yield put(setSaved(true));
}

export function* watchSaveToStorage() {
  yield takeLatest(SAVE_TO_STORAGE, saveToStorage);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchSaveToStorage()]);
}
