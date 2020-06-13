import {
  SoundManagerState,
  clearCurrentMixAction,
  setCurrentMixIsPlayingAction,
  setCurrentMixAction,
  CurrentMix,
  setCachedSoundsAction,
  setIsCachedAction,
} from './types';
import {empty, meditation, relax, sleep, work} from 'src/data/mixes';
import {createReducer} from '@reduxjs/toolkit';

function getCleanCurrentMix(): CurrentMix {
  return {
    isPlaying: false,
    mix: empty,
    cached: false,
    soundsInCache: [],
  };
}

const initialState: SoundManagerState = {
  currentMix: getCleanCurrentMix(),
  mixes: [meditation, relax, sleep, work],
  baseMixes: [meditation.id, relax.id, sleep.id, work.id],
  defaultMixes: [],
  userMixes: [],
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
    })
    .addCase(setCachedSoundsAction, (state, action) => {
      state.currentMix.soundsInCache = action.payload.soundsInCache;
    })
    .addCase(setIsCachedAction, (state, action) => {
      state.currentMix.cached = action.payload.cached;
    }),
);
