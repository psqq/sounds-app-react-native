/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

import {playSound, stopSound} from './sounds';
import Sound from 'react-native-sound';
import FirstScreen from './FirstScreen';

declare const global: {HermesInternal: null | {}};

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

const App = () => {
  return (
    // <View>
    // <TestSound />
    // </View>
    <View style={styles.container}>
      <FirstScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
