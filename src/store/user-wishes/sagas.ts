import {put, takeEvery, takeLatest, all, select} from 'redux-saga/effects';
import {
  saveUserWishesToStorageAction,
  setSavedAction,
  initUserWishesAction,
  setLoadedAction,
  UserWishesState,
  clearUserWishesAction,
  addWishAction,
} from './types';
import {RootState} from '..';
import AsyncStorage from '@react-native-community/async-storage';

//---
// Get store state for type resolving
//---
function* getState() {
  return (yield select()) as RootState;
}

//---
// Storage key
//---
const USER_WISHES_KEY_IN_STORAGE = 'user-wishes';

//---
// Init user wishes from storage
//---
function* initUserWishes() {
  const dataFromStorage = yield AsyncStorage.getItem(
    USER_WISHES_KEY_IN_STORAGE,
  );
  console.log('init 1', dataFromStorage);
  if (!dataFromStorage) {
    return;
  }
  const userWishes: UserWishesState = JSON.parse(dataFromStorage);
  console.log('init 2', userWishes);
  if (!userWishes || !userWishes.wishes) {
    return;
  }
  yield put(clearUserWishesAction());
  for (let wish of userWishes.wishes) {
    yield put(addWishAction({wish}));
  }
  yield put(setSavedAction({saved: false}));
  yield put(setLoadedAction({loaded: true}));
}

export function* watchInitUserWishes() {
  yield takeEvery(initUserWishesAction.type, initUserWishes);
}

//---
// Save user wishes to storage
//---
function* saveToStorage() {
  const state = yield* getState();
  const wishes = state.userWishes.wishes;
  const dataToSave = JSON.stringify(wishes);
  yield AsyncStorage.setItem(USER_WISHES_KEY_IN_STORAGE, dataToSave);
  console.log('saved', dataToSave);
  yield put(setSavedAction({saved: true}));
}

export function* watchSaveToStorage() {
  yield takeEvery(saveUserWishesToStorageAction.type, saveToStorage);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchSaveToStorage(), watchInitUserWishes()]);
}
