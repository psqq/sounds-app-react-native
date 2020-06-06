import {createSelector} from 'reselect';
import {RootState} from '.';

export const isUserWishesInitedSelector = (state: RootState) =>
  state.userWishes.inited;

export const timerSelector = (state: RootState) => state.timer;

export const isAppInitedSelector = createSelector(
  isUserWishesInitedSelector,
  (isUserWishesInited) => isUserWishesInited,
);

export const getTimerSecondsLeftSelector = createSelector(
  timerSelector,
  (timer) => {
    let msLeft = timer.duration;
    if (timer.startTime) {
      msLeft = timer.duration - (Date.now() - timer.startTime);
    }
    return msLeft / 1000;
  },
);
