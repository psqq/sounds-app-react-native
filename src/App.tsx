import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import FirstScreen from './FirstScreen';
import SoundsScreen from './SoundsScreen';

import {Stack} from './router';

const App = () => {
  return (
    // <View>
    // <TestSound />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen" headerMode="none">
        <Stack.Screen name="SoundsScreen" component={SoundsScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
