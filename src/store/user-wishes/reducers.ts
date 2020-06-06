import {
  UserWishesState,
  PossibleUserWishes,
  addWishAction,
  removeWishAction,
  addWishByNameAction,
  removeWishByNameAction,
  setSavedAction,
  setLoadedAction,
  clearUserWishesAction,
  setInitedAction,
} from './types';
import {createReducer} from '@reduxjs/toolkit';

const initialState: UserWishesState = {
  wishes: [],
  saved: false,
  loaded: false,
  inited: false,
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

export const rootReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addWishAction, (state, action) => {
      state.wishes.push(action.payload.wish);
    })
    .addCase(removeWishAction, (state, action) => {
      state.wishes = state.wishes.filter((x) => x !== action.payload.wish);
    })
    .addCase(addWishByNameAction, (state, action) => {
      const wish = wishNameToWish(action.payload.wishName);
      if (wish) {
        state.wishes.push(wish);
      }
    })
    .addCase(removeWishByNameAction, (state, action) => {
      const wish = wishNameToWish(action.payload.wishName);
      if (wish) {
        state.wishes = state.wishes.filter((x) => x !== wish);
      }
    })
    .addCase(setSavedAction, (state, action) => {
      state.saved = action.payload.saved;
    })
    .addCase(clearUserWishesAction, (state) => {
      state.wishes = [];
    })
    .addCase(setLoadedAction, (state, action) => {
      state.loaded = action.payload.loaded;
    })
    .addCase(setInitedAction, (state, action) => {
      state.inited = action.payload.inited;
    }),
);
