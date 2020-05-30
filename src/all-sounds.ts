const allSounds = [
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

export function getAllSounds() {
  return allSounds.map((sound) => {
    sound.sound = require('./assets/' + sound.sound);
    sound.icon = require('./assets/' + sound.icon);
    if (sound.previewImg) {
      sound.previewImg = require('./assets/' + sound.previewImg);
    }
  });
}
