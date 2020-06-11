import {createReducer} from '@reduxjs/toolkit';
import {
  disableTimerAction,
  enableTimerAction,
  initTimerAction,
  pauseTimerAction,
  resumeTimerAction,
  TimerState,
} from './types';

function getCleanTimerState(): TimerState {
  return {
    duration: 0,
    pause: true,
    startTime: 0,
    disabled: false,
  };
}

const initialState: TimerState = getCleanTimerState();

export const timer = createReducer(initialState, (builder) =>
  builder
    .addCase(initTimerAction, (state, action) => {
      state.pause = action.payload.paused;
      state.duration = action.payload.duration;
      state.startTime = action.payload.paused ? undefined : Date.now();
      state.disabled = false;
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
    })
    .addCase(disableTimerAction, (state) => {
      state.disabled = true;
    })
    .addCase(enableTimerAction, (state) => {
      state.disabled = false;
      state.pause = false;
      state.startTime = Date.now();
      state.duration = 15 * 60 * 1000;
    }),
);
