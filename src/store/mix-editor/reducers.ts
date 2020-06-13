import {MixEditor, setMixForEditAction} from './types';
import {empty, meditation, relax, sleep, work} from 'src/data/mixes';
import {createReducer} from '@reduxjs/toolkit';

const initialState: MixEditor = {
  mix: sleep,
  originalMix: '',
};

export const mixEditor = createReducer(initialState, (builder) => {
  builder.addCase(setMixForEditAction, (state, action) => {
    state.mix = action.payload.mix;
  });
});
