import {createAction} from '@reduxjs/toolkit';
import {SoundMix} from '../../data/mixes';

//---
// State
//---
export interface SoundManagerState {
  currentMix: {
    isPlaying: boolean;
    mix: SoundMix;
  };
}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

export const clearCurrentMixAction = createAction('ClearCurrentMixAction');
export const setCurrentMixIsPlayingAction = createAction(
  'SetCurrentMixIsPlayingAction',
  withPayloadType<{isPlaying: boolean}>(),
);
export const setCurrentMixAction = createAction(
  'SetCurrentMixAction',
  withPayloadType<{mix: SoundMix}>(),
);
export const playCurrentMixAction = createAction(
  'PlayCurrentMixAction',
  withPayloadType<{name: string}>(),
);
export const pauseCurrentMixAction = createAction('PauseCurrentMixAction');
export const resumeCurrentMixAction = createAction('ResumeCurrentMixAction');
export const stopCurrentMixAction = createAction('StopCurrentMixAction');
