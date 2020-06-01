//---
// State
//---
export enum PossibleUserWishes {
  WISH_TO_SLEEP_BETTER,
  WISH_TO_CONCENTRATE,
  WISH_TO_REDUCE_STRESS,
  WISH_TO_LEARN_TO_MEDITATE,
}

export interface UserWishesState {
  wishes: PossibleUserWishes[];
  saved: boolean;
}

//---
// Add wish action
//---
export const ADD_WISH = 'ADD_WISH';

export interface AddWishAction {
  type: typeof ADD_WISH;
  payload: PossibleUserWishes;
}

//---
//Save to storage action
//---
export const SAVE_TO_STORAGE = 'SAVE_TO_STORAGE';

export interface SaveToStorageAction {
  type: typeof SAVE_TO_STORAGE;
}

//---
// Add wish action
//---
export const SET_SAVED = 'SET_SAVED';

export interface SetSavedAction {
  type: typeof SET_SAVED;
  payload: boolean;
}

//---
// All actions
//---
export type UserWishesActionTypes =
  | AddWishAction
  | SaveToStorageAction
  | SetSavedAction;
