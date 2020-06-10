import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';

const MAIN_ROOT_SCREEN = 'MainRootScreen';
const MODAL_TIMER = 'ModalTimer';

export type RootStackParamList = {
  [MAIN_ROOT_SCREEN]: undefined;
  [MODAL_TIMER]: undefined;
};

const MAIN = 'Main';
const USER_WISHES = '';
const SOUND_WITH_TIMER = '';

export type AppStackParamList = {
  Main: undefined;
  UserWishes: undefined;
  SoundWithTimer: {
    soundName: string;
  };
};

export type UserWishesNavigationProp = StackNavigationProp<
  AppStackParamList,
  'UserWishes'
>;

export type MainNavigationProp = StackNavigationProp<AppStackParamList, 'Main'>;

export type SoundWithTimerNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppStackParamList, 'SoundWithTimer'>,
  StackNavigationProp<RootStackParamList>
>;

export type SoundWithTimerRouteProp = RouteProp<
  AppStackParamList,
  'SoundWithTimer'
>;

export const AppStack = createStackNavigator<AppStackParamList>();
export const RootStack = createStackNavigator<RootStackParamList>();
