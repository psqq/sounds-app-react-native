import {PLAY_SOUND, PlaySoundAction} from './types';

export function playSoundByName(soundName: string): PlaySoundAction {
  return {type: PLAY_SOUND, payload: soundName};
}
