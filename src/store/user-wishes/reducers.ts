import {
  UserWishesState,
  UserWishesActionTypes,
  ADD_WISH,
  SET_SAVED,
} from './types';

const initialState: UserWishesState = {
  wishes: [],
  saved: false,
};

export function userWishes(
  state = initialState,
  action: UserWishesActionTypes,
): UserWishesState {
  switch (action.type) {
    // Add user wish
    case ADD_WISH:
      if (state.wishes.indexOf(action.payload) >= 0) {
        return state;
      }
      return {
        ...state,
        wishes: [...state.wishes, action.payload],
      };

    // Set saved
    case SET_SAVED:
      return {
        ...state,
        saved: action.payload,
      };

    // otherwise
    default:
      return state;
  }
}
