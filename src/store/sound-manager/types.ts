//---
// State
//---
type SoundId = string;
type SoundResource = number;

interface OneSound {
  id: SoundId;
  resource: SoundResource;
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
  payload: SoundId;
}

//---
// Pause sound action
//---
export const PAUSE_SOUND = 'PAUSE_SOUND';

export interface PauseSoundAction {
  type: typeof PAUSE_SOUND;
  payload: SoundId;
}

//---
// All actions
//---
export type SoundManagerActionTypes = PlaySoundAction | PauseSoundAction;
