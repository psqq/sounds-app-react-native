import {
  TimerState,
  initTimerAction,
  pauseTimerAction,
  resumeTimerAction,
} from './types';
import {createReducer} from '@reduxjs/toolkit';

function getCleanTimerState(): TimerState {
  return {
    duration: 0,
    pause: true,
    startTime: 0,
  };
}

const initialState: TimerState = getCleanTimerState();

export const timer = createReducer(initialState, (builder) =>
  builder
    .addCase(initTimerAction, (state, action) => {
      state.pause = action.payload.paused;
      state.duration = action.payload.duration;
      state.startTime = action.payload.paused ? undefined : Date.now();
    })
    .addCase(pauseTimerAction, (state) => {
      state.pause = true;
      if (state.startTime) {
        state.duration = state.duration - (Date.now() - state.startTime);
      }
      state.startTime = undefined;
    })
    .addCase(resumeTimerAction, (state) => {
      state.pause = false;
      state.startTime = Date.now();
    }),
);
