// Require return type for resource
type rrtfr = number;

export const ICON_COFFEE_CUP: rrtfr = require('./icon/coffee-cup.png');
export const ICON_COMPASS: rrtfr = require('./icon/compass.png');
export const ICON_DAY: rrtfr = require('./icon/day.png');
export const ICON_EYE: rrtfr = require('./icon/eye.png');
export const ICON_HOME: rrtfr = require('./icon/home.png');
export const ICON_PAUSE: rrtfr = require('./icon/pause.png');
export const ICON_PLAY: rrtfr = require('./icon/play.png');
export const ICON_SETTINGS: rrtfr = require('./icon/settings.png');
export const ICON_YOGA: rrtfr = require('./icon/yoga.png');
export const SOUNDS_01_RAIN_ICON: rrtfr = require('./sounds/01-rain/icon.png');
export const SOUNDS_01_RAIN_PREVIEW: rrtfr = require('./sounds/01-rain/preview.jpg');
export const SOUNDS_01_RAIN_SOUND: rrtfr = require('./sounds/01-rain/sound.mp3');
export const SOUNDS_02_STRONG_WIND_ICON: rrtfr = require('./sounds/02-strong-wind/icon.png');
export const SOUNDS_02_STRONG_WIND_PREVIEW: rrtfr = require('./sounds/02-strong-wind/preview.jpg');
export const SOUNDS_02_STRONG_WIND_SOUND: rrtfr = require('./sounds/02-strong-wind/sound.mp3');
export const SOUNDS_03_THUNDER_ICON: rrtfr = require('./sounds/03-thunder/icon.png');
export const SOUNDS_03_THUNDER_PREVIEW: rrtfr = require('./sounds/03-thunder/preview.jpg');
export const SOUNDS_03_THUNDER_SOUND: rrtfr = require('./sounds/03-thunder/sound.mp3');

export const ASSETS_TREE = {
  icon: {
    coffee_cup: ICON_COFFEE_CUP,
    compass: ICON_COMPASS,
    day: ICON_DAY,
    eye: ICON_EYE,
    home: ICON_HOME,
    pause: ICON_PAUSE,
    play: ICON_PLAY,
    settings: ICON_SETTINGS,
    yoga: ICON_YOGA,
  },
  sounds: {
    '01_rain': {
      icon: SOUNDS_01_RAIN_ICON,
      preview: SOUNDS_01_RAIN_PREVIEW,
      sound: SOUNDS_01_RAIN_SOUND,
    },
    '02_strong_wind': {
      icon: SOUNDS_02_STRONG_WIND_ICON,
      preview: SOUNDS_02_STRONG_WIND_PREVIEW,
      sound: SOUNDS_02_STRONG_WIND_SOUND,
    },
    '03_thunder': {
      icon: SOUNDS_03_THUNDER_ICON,
      preview: SOUNDS_03_THUNDER_PREVIEW,
      sound: SOUNDS_03_THUNDER_SOUND,
    },
  },
};
