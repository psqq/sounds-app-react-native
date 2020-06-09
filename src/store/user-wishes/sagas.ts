import AsyncStorage from '@react-native-community/async-storage';
import {all, fork, put, select, takeEvery} from 'redux-saga/effects';
import {RootState} from '..';
import {
  addWishAction,
  clearUserWishesAction,
  initAction,
  loadUserWishesFromStorageAction,
  PossibleUserWishes,
  saveUserWishesToStorageAction,
  setInitedAction,
  setLoadedAction,
  setSavedAction,
} from './types';

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
// Load user wishes from storage
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
  yield put(setInitedAction({inited: true}));
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
// Init user wishes module
//---
function* init() {
  const state = yield* getState();
  yield* saveToStorage();
  yield put(setInitedAction({inited: true}));
}

export function* watchInit() {
  yield takeEvery(initAction.type, init);
}

//---
// Root saga
//---
export function* rootSaga() {
  yield all([watchSaveToStorage, watchLoadUserWishesFromStorage].map(fork));
}
