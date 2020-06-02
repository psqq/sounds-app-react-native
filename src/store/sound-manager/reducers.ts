import {SoundManagerActionTypes, SoundManagerState} from './types';

const initialState: SoundManagerState = {
  sounds: [],
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
