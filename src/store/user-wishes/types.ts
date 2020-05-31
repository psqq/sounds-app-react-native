export enum PossibleUserWishes {
  WISH_TO_SLEEP_BETTER,
  WISH_TO_CONCENTRATE,
  WISH_TO_REDUCE_STRESS,
  WISH_TO_LEARN_TO_MEDITATE,
}

export interface UserWishesState {
  wishes: PossibleUserWishes[];
}

export const ADD_WISH = 'ADD_WISH';

export interface AddWishAction {
  type: typeof ADD_WISH;
  payload: PossibleUserWishes;
}

export type UserWishesActionTypes = AddWishAction;
