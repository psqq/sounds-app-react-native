import React from 'react';
import {View, Button} from 'react-native';
import Sound from 'react-native-sound';

import {playSound, stopSound} from './sound-manager';

const TestSound = () => {
  const rain_01 = 'rain_01.mp3';
  return (
    <View>
      <Button
        title={'Play sound!'}
        onPress={() =>
          playSound({
            url: rain_01,
            basePath: Sound.MAIN_BUNDLE,
          })
        }
      />
      <Button title={'Stop sound!'} onPress={() => stopSound(rain_01)} />
    </View>
  );
};

export default TestSound;
