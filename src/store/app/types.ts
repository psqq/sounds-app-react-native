import {createAction} from '@reduxjs/toolkit';

//---
// Actions
//---
export interface AppState {}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

const PREFFIX = 'app_';

export const initAppAction = createAction(PREFFIX + 'initAppAction');
