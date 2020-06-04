import {
  SoundManagerState,
  clearCurrentMixAction,
  setCurrentMixIsPlayingAction,
  setCurrentMixAction,
} from './types';
import {empty} from 'src/data/mixes';
import {createReducer} from '@reduxjs/toolkit';

function getCleanCurrentMix() {
  return {
    isPlaying: false,
    mix: empty,
  };
}

const initialState: SoundManagerState = {
  currentMix: getCleanCurrentMix(),
};

export const soundManager = createReducer(initialState, (builder) =>
  builder
    .addCase(setCurrentMixAction, (state, action) => {
      state.currentMix.mix = action.payload.mix;
    })
    .addCase(setCurrentMixIsPlayingAction, (state, action) => {
      state.currentMix.isPlaying = action.payload.isPlaying;
    })
    .addCase(clearCurrentMixAction, (state) => {
      state.currentMix = getCleanCurrentMix();
    }),
);
