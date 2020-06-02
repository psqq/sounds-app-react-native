import {
  UserWishesState,
  UserWishesActionTypes,
  ADD_WISH,
  SET_SAVED,
  ADD_WISH_BY_NAME,
  PossibleUserWishes,
} from './types';
import {addWish} from './actions';

const initialState: UserWishesState = {
  wishes: [],
  saved: false,
};

function wishNameToWish(name: string): PossibleUserWishes | null {
  const lcName = name.toLowerCase();
  switch (lcName) {
    case 'лучше засыпать':
      return PossibleUserWishes.WISH_TO_SLEEP_BETTER;
    case 'концентрировать внимание':
      return PossibleUserWishes.WISH_TO_CONCENTRATE;
    case 'снизить стресс':
      return PossibleUserWishes.WISH_TO_REDUCE_STRESS;
    case 'научиться медитировать':
      return PossibleUserWishes.WISH_TO_LEARN_TO_MEDITATE;
  }
  return null;
}

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

    // Add user wish
    case ADD_WISH_BY_NAME:
      const wish = wishNameToWish(action.payload);
      if (wish) {
        return userWishes(state, addWish(wish));
      }
      return state;

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
