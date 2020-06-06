import {createSelector} from 'reselect';
import {RootState} from '.';

export const isUserWishesInitedSelector = (state: RootState) =>
  state.userWishes.inited;

export const isAppInitedSelector = createSelector(
  isUserWishesInitedSelector,
  (isUserWishesInited) => isUserWishesInited,
);
