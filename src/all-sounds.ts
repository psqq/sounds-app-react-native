import {
  SOUNDS_01_RAIN_PREVIEW,
  SOUNDS_02_STRONG_WIND_PREVIEW,
  SOUNDS_03_THUNDER_PREVIEW,
} from './assets';

export type SoundInfo = {
  title: string;
  sound: string;
  soundUrl?: any;
  icon: string;
  iconUrl?: any;
  previewImg: number;
};

const allSounds: SoundInfo[] = [
  {
    title: 'Дождь',
    sound: 'sound-01-rain.mp3',
    icon: 'sound-01-rain-icon.png',
    previewImg: SOUNDS_01_RAIN_PREVIEW,
  },
  {
    title: 'Сильный ветер',
    sound: 'sound-02-strong-wind.mp3',
    icon: 'sound-02-strong-wind-icon.png',
    previewImg: SOUNDS_02_STRONG_WIND_PREVIEW,
  },
  {
    title: 'Гром',
    sound: 'sound-03-thunder.mp3',
    icon: 'sound-03-thunder-icon.png',
    previewImg: SOUNDS_03_THUNDER_PREVIEW,
  },
];

export function getAllSounds(): SoundInfo[] {
  return allSounds.map((sound) => {
    // sound.soundUrl = require('./assets/' + sound.sound);
    // sound.iconUrl = require('./assets/' + sound.icon);
    // if (sound.previewImg) {
    //   sound.previewImgUrl = require('./assets/' + sound.previewImg);
    // }
    return sound;
  });
}
