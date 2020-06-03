import {
  PLAY_MUSIC,
  PlayMusicAction,
  StopMusicAction,
  STOP_MUSIC,
  ResumeMusicAction,
  RESUME_MUSIC,
} from './types';

export function playMusic(name: string): PlayMusicAction {
  return {type: PLAY_MUSIC, payload: {name}};
}

export function pauseMusic(): StopMusicAction {
  return {type: STOP_MUSIC};
}

export function resumeMusic(): ResumeMusicAction {
  return {type: RESUME_MUSIC};
}

export function stopMusic(): StopMusicAction {
  return {type: STOP_MUSIC};
}
