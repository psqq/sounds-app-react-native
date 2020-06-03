import {createAction} from '@reduxjs/toolkit';

//---
// State
//---
type SoundResource = number;

export interface PlaylistItem {
  resource: SoundResource;
  title: string;
}

export interface PlayableSound {
  sound: PlaylistItem;
  volume: number;
}

export interface SoundManagerState {
  playlist: PlaylistItem[];
  currentMusic?: {
    isPlaying: boolean;
    sounds: PlayableSound[];
  };
}

//---
// Actions
//---
export const ClearMusicAction = createAction('ClearMusicAction');
export const SetMusicIsPlayingAction = createAction<{isPlaying: boolean}>(
  'SetMusicIsPlayingAction',
);
export const SetMusicSoundsAction = createAction<{sounds: PlayableSound[]}>(
  'SetMusicSoundsAction',
);
export const PlayMusicAction = createAction<{name: string}>('PlayMusicAction');
export const PauseMusicAction = createAction('PauseMusicAction');

//---
// Pause music action
//---
export const PAUSE_MUSIC = 'PAUSE_MUSIC';

export interface PauseMusicAction {
  type: typeof PAUSE_MUSIC;
}

//---
// Resume music action
//---
export const RESUME_MUSIC = 'RESUME_MUSIC';

export interface ResumeMusicAction {
  type: typeof RESUME_MUSIC;
}

//---
// Stop music
//---
export const STOP_MUSIC = 'STOP_MUSIC';

export interface StopMusicAction {
  type: typeof STOP_MUSIC;
}

//---
// All actions
//---
export type SoundManagerActionTypes =
  | SetMusicSoundsAction
  | SetMusicIsPlayingAction
  | ClearMusicAction
  | PlayMusicAction
  | PauseMusicAction
  | ResumeMusicAction
  | StopMusicAction;
