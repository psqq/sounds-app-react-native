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
}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

const PREFFIX = 'user_wishes_';

export const addWishAction = createAction(
  PREFFIX + 'addWishAction',
  withPayloadType<{wish: PossibleUserWishes}>(),
);

export const removeWishAction = createAction(
  PREFFIX + 'removeWishAction',
  withPayloadType<{wish: PossibleUserWishes}>(),
);

export const addWishByNameAction = createAction(
  PREFFIX + 'addWishByNameAction',
  withPayloadType<{wishName: string}>(),
);

export const removeWishByNameAction = createAction(
  PREFFIX + 'removeWishByNameAction',
  withPayloadType<{wishName: string}>(),
);

export const clearUserWishesAction = createAction(
  PREFFIX + 'clearUserWishesAction',
);

export const loadUserWishesFromStorageAction = createAction(
  PREFFIX + 'loadUserWishesFromStorageAction',
);

export const saveUserWishesToStorageAction = createAction(
  PREFFIX + 'saveUserWishesToStorageAction',
);

export const setSavedAction = createAction(
  PREFFIX + 'setSavedAction',
  withPayloadType<{saved: boolean}>(),
);

export const setLoadedAction = createAction(
  PREFFIX + 'setLoadedAction',
  withPayloadType<{loaded: boolean}>(),
);
