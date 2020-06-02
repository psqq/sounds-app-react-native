import {
  PossibleUserWishes,
  AddWishAction,
  ADD_WISH,
  SetSavedAction,
  SET_SAVED,
  SaveToStorageAction,
  SAVE_TO_STORAGE,
  ADD_WISH_BY_NAME,
  AddWishByNameAction,
} from './types';

export function addWish(wish: PossibleUserWishes): AddWishAction {
  return {type: ADD_WISH, payload: wish};
}

export function addWishByName(wishName: string): AddWishByNameAction {
  return {type: ADD_WISH_BY_NAME, payload: wishName};
}

export function setSaved(saved: boolean): SetSavedAction {
  return {type: SET_SAVED, payload: saved};
}

export function saveToStorage(): SaveToStorageAction {
  return {type: SAVE_TO_STORAGE};
}
