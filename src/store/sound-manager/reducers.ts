import {SoundManagerActionTypes, SoundManagerState} from './types';
import {playlist} from './playlist';

const initialState: SoundManagerState = {
  sounds: playlist,
};

export function soundManager(
  state = initialState,
  action: SoundManagerActionTypes,
): SoundManagerState {
  switch (action.type) {
    // otherwise
    default:
      return state;
  }
}
