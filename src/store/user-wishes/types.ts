import {createAction} from '@reduxjs/toolkit';

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
  loaded: boolean;
  inited: boolean;
}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

const USER_WISHES_ = 'USER_WISHES_';

export const addWishAction = createAction(
  USER_WISHES_ + 'addWishAction',
  withPayloadType<{wish: PossibleUserWishes}>(),
);

export const removeWishAction = createAction(
  USER_WISHES_ + 'removeWishAction',
  withPayloadType<{wish: PossibleUserWishes}>(),
);

export const addWishByNameAction = createAction(
  USER_WISHES_ + 'addWishByNameAction',
  withPayloadType<{wishName: string}>(),
);

export const removeWishByNameAction = createAction(
  USER_WISHES_ + 'removeWishByNameAction',
  withPayloadType<{wishName: string}>(),
);

export const clearUserWishesAction = createAction(
  USER_WISHES_ + 'clearUserWishesAction',
);

export const loadUserWishesFromStorageAction = createAction(
  USER_WISHES_ + 'loadUserWishesFromStorageAction',
);

export const saveUserWishesToStorageAction = createAction(
  USER_WISHES_ + 'saveUserWishesToStorageAction',
);

export const setSavedAction = createAction(
  USER_WISHES_ + 'setSavedAction',
  withPayloadType<{saved: boolean}>(),
);

export const setLoadedAction = createAction(
  USER_WISHES_ + 'setLoadedAction',
  withPayloadType<{loaded: boolean}>(),
);

export const initAction = createAction(USER_WISHES_ + 'initAction');

export const setInitedAction = createAction(
  USER_WISHES_ + 'setInitedAction',
  withPayloadType<{inited: boolean}>(),
);
