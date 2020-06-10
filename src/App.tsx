import {NavigationContainer} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {connect, Provider} from 'react-redux';
import {AppStack, RootStack} from './router';
import {Main} from './screens/Main';
import {ModalTimer} from './screens/ModalTimer';
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

const AppStackScreen: FunctionComponent = storeEnhancer((props: Props) => {
  const {wishesLoaded, isAppInited} = props;
  if (!isAppInited) {
    return <></>;
  }
  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      {wishesLoaded ? (
        <>
          <AppStack.Screen name="Main" component={Main} />
          <AppStack.Screen name="SoundWithTimer" component={SoundWithTimer} />
        </>
      ) : (
        <>
          <AppStack.Screen name="UserWishes" component={UserWishes} />
          <AppStack.Screen name="Main" component={Main} />
          <AppStack.Screen name="SoundWithTimer" component={SoundWithTimer} />
        </>
      )}
    </AppStack.Navigator>
  );
});

// Main application component
let App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        headerMode="none"
        screenOptions={{animationEnabled: false}}>
        <RootStack.Screen name="MainRootScreen" component={AppStackScreen} />
        <RootStack.Screen name="ModalTimer" component={ModalTimer} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

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
