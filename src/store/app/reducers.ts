import {AppState} from './types';
import {createReducer} from '@reduxjs/toolkit';

const initialState: AppState = {};

export const rootReducer = createReducer(initialState, (builder) =>
  builder.addCase('', () => {}),
);
