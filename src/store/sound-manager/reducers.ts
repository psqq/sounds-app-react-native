import {
  SoundManagerActionTypes,
  SoundManagerState,
  CLEAR_MUSIC,
  SET_MUSIC_IS_PLAING,
  SET_MUSIC_SOUNDS,
} from './types';
import {playlist} from './playlist';
import cloneDeep from 'lodash';
import { createReducer } from '@reduxjs/toolkit'

const initialState: SoundManagerState = {
  playlist,
  currentMusic: undefined,
};

export createReducer()

// export function soundManager(
//   state = initialState,
//   action: SoundManagerActionTypes,
// ): SoundManagerState {
//   switch (action.type) {
//     case SET_MUSIC_SOUNDS:
//       if (!state.currentMusic) {
//         return state;
//       }
//       return {
//         ...state,
//         currentMusic: {
//           ...state.currentMusic,
//           sounds: action.payload.sounds,
//         },
//       };
//     case SET_MUSIC_IS_PLAING:
//       if (!state.currentMusic) {
//         return state;
//       }
//       return {
//         ...state,
//         currentMusic: {
//           ...state.currentMusic,
//           isPlaying: action.payload.isPlaying,
//         },
//       };
//     case CLEAR_MUSIC:
//       return {
//         ...state,
//         currentMusic: {
//           isPlaying: false,
//           sounds: [],
//         },
//       };
//     // otherwise
//     default:
//       return state;
//   }
// }
