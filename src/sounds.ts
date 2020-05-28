import Sound from 'react-native-sound';

Sound.setCategory('Playback');

// export const soundOfRain = new Sound(
//   'sound_of_rain.ogg',
//   Sound.MAIN_BUNDLE,
//   (error) => {
//     if (error) {
//       console.log('failed to load the sound', error);
//       return;
//     }
//   },
// );

const sounds: {[key: string]: Sound} = {};

interface PlaySoundArgs {
  url: string;
  basePath?: string;
  isRequire?: boolean;
}

function getSound({url, isRequire, basePath}: PlaySoundArgs): Promise<Sound> {
  if (url in sounds) {
    return Promise.resolve(sounds[url]);
  }
  return new Promise((res, rej) => {
    const callback = (error: any, sound: Sound) => {
      if (error) {
        return rej(error);
      } else {
        return res(sound);
      }
    };
    if (isRequire) {
      const sound: Sound = new Sound(url, (error) => callback(error, sound));
    } else {
      const sound: Sound = new Sound(url, basePath, (error) =>
        callback(error, sound),
      );
    }
  });
}

export async function playSound(args: PlaySoundArgs) {
  const sound = await getSound(args);
  sounds[args.url] = sound;
  sound.play();
}

export async function stopSound(url: string) {
  const sound = await getSound({url});
  sound.stop();
}
