import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import {Stack} from './router';
import {UserWishes} from './screens/UserWishes';
import {store} from './store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserWishes" headerMode="none">
        <Stack.Screen name="UserWishes" component={UserWishes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
