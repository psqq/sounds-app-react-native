import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider, connect} from 'react-redux';
import {Stack} from './router';
import {Main} from './screens/Main';
import {SoundWithTimer} from './screens/SoundWithTimer';
import {UserWishes} from './screens/UserWishes';
import {store, RootState, TypeOfConnect} from './store';
import {initAppAction} from './store/app/types';

const storeEnhancer = connect(
  (state: RootState) => ({
    wishesLoaded: state.userWishes.loaded,
    appInited: state.app.inited,
  }),
  (dispatch) => {
    return {
      init: () => dispatch(initAppAction()),
    };
  },
);

type Props = TypeOfConnect<typeof storeEnhancer>;

let App = storeEnhancer((props: Props) => {
  const {init, wishesLoaded, appInited} = props;
  useEffect(() => {
    if (!appInited) {
      init();
    }
    if (appInited) {
      SplashScreen.hide();
    }
  }, [init, appInited]);
  if (!appInited) {
    return <></>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {wishesLoaded ? (
          <>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="SoundWithTimer" component={SoundWithTimer} />
          </>
        ) : (
          <>
            <Stack.Screen name="UserWishes" component={UserWishes} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="SoundWithTimer" component={SoundWithTimer} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
