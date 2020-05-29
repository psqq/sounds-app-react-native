import React from 'react';
import {StyleSheet, View} from 'react-native';

import FirstScreen from './FirstScreen';
import SoundsScreen from './SoundsScreen';

const App = () => {
  return (
    // <View>
    // <TestSound />
    // </View>
    // <View style={styles.container}>
    //   <SoundsScreen />
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
