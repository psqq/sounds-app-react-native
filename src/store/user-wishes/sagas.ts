import {put, takeEvery, takeLatest, all, select} from 'redux-saga/effects';
import {
  saveUserWishesToStorageAction,
  setSavedAction,
  loadUserWishesFromStorageAction,
  setLoadedAction,
  UserWishesState,
  clearUserWishesAction,
  addWishAction,
  PossibleUserWishes,
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
function* loadUserWishesFromStorage() {
  const dataFromStorage = yield AsyncStorage.getItem(
    USER_WISHES_KEY_IN_STORAGE,
  );
  if (!dataFromStorage) {
    return;
  }
  const wishes: PossibleUserWishes[] = JSON.parse(dataFromStorage);
  if (!wishes) {
    return;
  }
  yield put(clearUserWishesAction());
  for (let wish of wishes) {
    yield put(addWishAction({wish}));
  }
  yield put(setSavedAction({saved: false}));
  yield put(setLoadedAction({loaded: true}));
  console.log('loaded', true);
}

export function* watchLoadUserWishesFromStorage() {
  yield takeEvery(
    loadUserWishesFromStorageAction.type,
    loadUserWishesFromStorage,
  );
}

//---
// Save user wishes to storage
//---
function* saveToStorage() {
  const state = yield* getState();
  const wishes = state.userWishes.wishes;
  const dataToSave = JSON.stringify(wishes);
  yield AsyncStorage.setItem(USER_WISHES_KEY_IN_STORAGE, dataToSave);
  yield put(setSavedAction({saved: true}));
}

export function* watchSaveToStorage() {
  yield takeEvery(saveUserWishesToStorageAction.type, saveToStorage);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchSaveToStorage(), watchLoadUserWishesFromStorage()]);
}
