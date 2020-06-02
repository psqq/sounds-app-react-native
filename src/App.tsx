import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {Stack} from './router';
import {store} from './store';
import {Main} from './screens/Main';
import {UserWishes} from './screens/UserWishes';
import {SoundWithTimer} from './screens/SoundWithTimer';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserWishes" headerMode="none">
        <Stack.Screen name="UserWishes" component={UserWishes} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="SoundWithTimer" component={SoundWithTimer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
