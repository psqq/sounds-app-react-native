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
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Button,
} from 'react-native';

import {playSound, stopSound} from './sounds';
import Sound from 'react-native-sound';

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
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TestSound />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
