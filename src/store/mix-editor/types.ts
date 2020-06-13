import {createAction} from '@reduxjs/toolkit';
import {SoundMix, MixId} from '../../data/mixes';

//---
// State
//---
export interface MixEditor {
  originalMix: MixId;
  mix: SoundMix;
}

//---
// Actions
//---
function withPayloadType<T>() {
  return (t: T) => ({payload: t});
}

const MIX_EDITOR = 'MIX_EDITOR_';

export const saveEditedMixAction = createAction(MIX_EDITOR + 'applyMixAction');
export const setMixForEditAction = createAction(
  MIX_EDITOR + 'setMixForEditAction',
  withPayloadType<{mix: SoundMix}>(),
);
