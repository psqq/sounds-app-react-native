import {
  PLAY_SOUND,
  PlaySoundAction,
  StopAllSoundsAction,
  STOP_ALL_SOUNDS,
} from './types';
import {playlist} from './playlist';

export function playSoundByName(soundName: string): PlaySoundAction {
  return {type: PLAY_SOUND, payload: playlist[0].resource};
}

export function stopAllSounds(): StopAllSoundsAction {
  return {type: STOP_ALL_SOUNDS};
}
