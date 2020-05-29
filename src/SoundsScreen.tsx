import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const SoundsScreen = () => {
  return (
    <View>
      <StatusBar
        translucent={false}
        backgroundColor="blue"
        barStyle="light-content"
      />
      <Text>Sounds screen</Text>
    </View>
  );
};

export default SoundsScreen;
