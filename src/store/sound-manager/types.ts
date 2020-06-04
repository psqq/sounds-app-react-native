import {createAction} from '@reduxjs/toolkit';

//---
// State
//---
export type Resource = number;

export interface PlaylistItem {
  id: string;
  sound: Resource;
  previewImg: Resource;
  title: string;
}

export interface MusicComposition {
  title: string;
  sounds: PlaylistItem[];
}

export interface PlayableSound {
  sound: PlaylistItem;
  volume: number;
}

export interface SoundManagerState {
  playlist: PlaylistItem[];
  currentMusic: {
    isPlaying: boolean;
    sounds: PlayableSound[];
  };
}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

export const clearMusicAction = createAction('ClearMusicAction');
export const setMusicIsPlayingAction = createAction(
  'SetMusicIsPlayingAction',
  withPayloadType<{isPlaying: boolean}>(),
);
export const setMusicSoundsAction = createAction(
  'SetMusicSoundsAction',
  withPayloadType<{sounds: PlayableSound[]}>(),
);
export const playMusicAction = createAction(
  'PlayMusicAction',
  withPayloadType<{name: string}>(),
);
export const pauseMusicAction = createAction('PauseMusicAction');
export const resumeMusicAction = createAction('ResumeMusicAction');
export const stopMusicAction = createAction('StopMusicAction');
