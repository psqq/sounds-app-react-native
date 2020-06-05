import {setAppInitedAction, AppState} from './types';
import {createReducer} from '@reduxjs/toolkit';

const initialState: AppState = {
  inited: false,
};

export const rootReducer = createReducer(initialState, (builder) =>
  builder.addCase(setAppInitedAction, (state, action) => {
    state.inited = action.payload.inited;
  }),
);
