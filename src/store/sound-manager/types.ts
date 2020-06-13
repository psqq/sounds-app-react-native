import {createAction} from '@reduxjs/toolkit';
import {SoundMix, MixId} from '../../data/mixes';

//---
// State
//---
export interface CachedSound {
  soundId: string;
  cacheId: string;
}

export interface CurrentMix {
  isPlaying: boolean;
  mix: SoundMix;
  cached: boolean;
  soundsInCache: CachedSound[];
}

export interface SoundManagerState {
  currentMix: CurrentMix;
  mixes: SoundMix[];
  baseMixes: MixId[];
  defaultMixes: MixId[];
  userMixes: MixId[];
}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

const SOUND_MANAGER = 'SOUND_MANAGER_';

export const clearCurrentMixAction = createAction('ClearCurrentMixAction');
export const setCurrentMixIsPlayingAction = createAction(
  SOUND_MANAGER + 'SetCurrentMixIsPlayingAction',
  withPayloadType<{isPlaying: boolean}>(),
);
export const setCurrentMixAction = createAction(
  SOUND_MANAGER + 'SetCurrentMixAction',
  withPayloadType<{mix: SoundMix}>(),
);
export const playCurrentMixAction = createAction(
  SOUND_MANAGER + 'PlayCurrentMixAction',
  withPayloadType<{name: string}>(),
);
export const setCachedSoundsAction = createAction(
  SOUND_MANAGER + 'setCachedSoundsAction',
  withPayloadType<{soundsInCache: CachedSound[]}>(),
);
export const setIsCachedAction = createAction(
  SOUND_MANAGER + 'setIsCachedAction',
  withPayloadType<{cached: boolean}>(),
);
export const pauseCurrentMixAction = createAction('PauseCurrentMixAction');
export const resumeCurrentMixAction = createAction('ResumeCurrentMixAction');
export const stopCurrentMixAction = createAction('StopCurrentMixAction');
