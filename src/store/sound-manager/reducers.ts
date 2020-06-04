import {
  SoundManagerState,
  setMusicSoundsAction,
  setMusicIsPlayingAction,
  clearMusicAction,
} from './types';
import {playlist} from './playlist';
import {createReducer} from '@reduxjs/toolkit';

function getCleanCurrentMusic() {
  return {
    isPlaying: false,
    sounds: [],
  };
}

const initialState: SoundManagerState = {
  playlist,
  currentMusic: getCleanCurrentMusic(),
};

export const soundManager = createReducer(initialState, (builder) =>
  builder
    .addCase(setMusicSoundsAction, (state, action) => {
      state.currentMusic.sounds = action.payload.sounds;
    })
    .addCase(setMusicIsPlayingAction, (state, action) => {
      state.currentMusic.isPlaying = action.payload.isPlaying;
    })
    .addCase(clearMusicAction, (state, action) => {
      state.currentMusic = getCleanCurrentMusic();
    }),
);
