import Sound from 'react-native-sound';
import shortid from 'shortid';

Sound.setCategory('Playback');

const sounds: {[key: string]: Sound} = {};

export function loadSound(
  resource: number,
  setup?: (sound: Sound) => void,
): Promise<string> {
  return new Promise((res, rej) => {
    const callback = (error: any, sound: Sound) => {
      if (error) {
        console.error(error);
        return rej(error);
      } else {
        const id = shortid();
        sounds[id] = sound;
        if (setup) {
          setup(sound);
        }
        return res(id);
      }
    };
    const sound: Sound = new Sound(resource, (error) => callback(error, sound));
  });
}

export function getSound(id: string): Sound {
  return sounds[id];
}

export function stopAndRemove(id: string): Promise<string> {
  if (!sounds[id]) {
    return Promise.resolve('');
  }
  return new Promise((res, rej) => {
    try {
      sounds[id].stop(() => res(id));
    } catch (err) {
      console.error(err);
      rej(err);
    }
  });
}
