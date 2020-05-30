export type SoundInfo = {
  title: string;
  sound: string;
  soundUrl?: any;
  icon: string;
  iconUrl?: any;
  previewImg?: string;
  previewImgUrl?: any;
};

const allSounds: SoundInfo[] = [
  {
    title: 'Дождь',
    sound: 'sound-01-rain.mp3',
    icon: 'sound-01-rain-icon.png',
    previewImg: 'sound-01-rain-preview.png',
  },
  {
    title: 'Сильный ветер',
    sound: 'sound-02-strong-wind.mp3',
    icon: 'sound-02-strong-wind-icon.png',
    previewImg: 'sound-02-strong-wind-preview.png',
  },
  {
    title: 'Гром',
    sound: 'sound-03-thunder.mp3',
    icon: 'sound-03-thunder-icon.png',
    previewImg: 'sound-03-thunder-preview.png',
  },
];

export function getAllSounds(): SoundInfo[] {
  return allSounds.map((sound) => {
    sound.soundUrl = require('./assets/' + sound.sound);
    sound.iconUrl = require('./assets/' + sound.icon);
    if (sound.previewImg) {
      sound.previewImgUrl = require('./assets/' + sound.previewImg);
    }
    return sound;
  });
}
