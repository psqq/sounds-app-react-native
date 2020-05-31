import {UserWishesState, UserWishesActionTypes, ADD_WISH} from './types';

const initialState: UserWishesState = {
  wishes: [],
};

export function userWishes(
  state = initialState,
  action: UserWishesActionTypes,
): UserWishesState {
  switch (action.type) {
    case ADD_WISH:
      if (state.wishes.indexOf(action.payload) >= 0) {
        return state;
      }
      return {
        wishes: [...state.wishes, action.payload],
      };
    default:
      return state;
  }
}
