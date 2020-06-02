import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const sounds: {[key: number]: Sound} = {};

export function getOrLoadSound(resource: number): Promise<Sound> {
  if (sounds[resource]) {
    return Promise.resolve(sounds[resource]);
  }
  return new Promise((res, rej) => {
    const callback = (error: any, sound: Sound) => {
      if (error) {
        return rej(error);
      } else {
        sounds[resource] = sound;
        return res(sound);
      }
    };
    const sound: Sound = new Sound(resource, (error) => callback(error, sound));
  });
}
