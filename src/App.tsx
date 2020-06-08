import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {connect, Provider} from 'react-redux';
import {Stack} from './router';
import {Main} from './screens/Main';
import {SoundWithTimer} from './screens/SoundWithTimer';
import {UserWishes} from './screens/UserWishes';
import {RootState, store, TypeOfConnect} from './store';
import {initAppAction} from './store/app/types';
import {isAppInitedSelector} from './store/selectors';

const storeEnhancer = connect((state: RootState) => ({
  wishesLoaded: state.userWishes.loaded,
  isAppInited: isAppInitedSelector(state),
}));

type Props = TypeOfConnect<typeof storeEnhancer>;

// Main application component
let App = storeEnhancer((props: Props) => {
  const {wishesLoaded, isAppInited} = props;
  if (!isAppInited) {
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

// Init app
store.dispatch(initAppAction());
const unsubscribeOnAppInit = store.subscribe(() => {
  if (isAppInitedSelector(store.getState())) {
    SplashScreen.hide();
    unsubscribeOnAppInit();
  }
});

// Return app with provided redux storage
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
