import {createAction} from '@reduxjs/toolkit';

//---
// State
//---
export interface TimerState {
  startTime?: number;
  duration: number;
  pause: boolean;
}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

const TIMER = 'TIMER_';

export const initTimerAction = createAction(
  TIMER + 'initTimerAction',
  withPayloadType<{duration: number; paused: boolean}>(),
);
export const pauseTimerAction = createAction(TIMER + 'pauseTimerAction');
export const resumeTimerAction = createAction(TIMER + 'resumeTimerAction');
