//---
// State
//---
type SoundResource = number;

export interface OneSound {
  resource: SoundResource;
  title: string;
  isPlaying: boolean;
}

export interface SoundManagerState {
  sounds: OneSound[];
}

//---
// Play sound action
//---
export const PLAY_SOUND = 'PLAY_SOUND';

export interface PlaySoundAction {
  type: typeof PLAY_SOUND;
  payload: SoundResource;
}

//---
// Pause sound action
//---
export const PAUSE_SOUND = 'PAUSE_SOUND';

export interface PauseSoundAction {
  type: typeof PAUSE_SOUND;
  payload: SoundResource;
}

//---
// Stop all sounds
//---
export const STOP_ALL_SOUNDS = 'STOP_ALL_SOUNDS';

export interface StopAllSoundsAction {
  type: typeof STOP_ALL_SOUNDS;
}

//---
// All actions
//---
export type SoundManagerActionTypes = PlaySoundAction | PauseSoundAction;
