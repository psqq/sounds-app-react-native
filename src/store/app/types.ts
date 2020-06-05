import {createAction} from '@reduxjs/toolkit';

//---
// Actions
//---
export interface AppState {
  inited: boolean;
}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

const PREFFIX = 'app_';

export const initAppAction = createAction(PREFFIX + 'initAppAction');

export const setAppInitedAction = createAction(
  PREFFIX + 'setAppInitedAction',
  withPayloadType<{inited: boolean}>(),
);
