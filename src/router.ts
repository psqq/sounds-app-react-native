import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';

export const MAIN_ROOT_SCREEN = 'MainRootScreen';
export const MODAL_TIMER = 'ModalTimer';
export const MODAL_CUSTOM_TIMER = 'ModalCustomTimer';

export type RootStackParamList = {
  [MAIN_ROOT_SCREEN]: undefined;
  [MODAL_TIMER]: undefined;
  [MODAL_CUSTOM_TIMER]: undefined;
};

export type MainRootScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof MAIN_ROOT_SCREEN
>;

export type ModalTimerNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof MODAL_TIMER
>;

export type ModalCustomTimerNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, typeof MODAL_CUSTOM_TIMER>,
  StackNavigationProp<AppStackParamList>
>;

export const MAIN = 'Main';
export const USER_WISHES = 'UserWishes';
export const SOUND_WITH_TIMER = 'SoundWithTimer';
export const MIX_EDITOR = 'MixEditor';

export type AppStackParamList = {
  [MAIN]: undefined;
  [USER_WISHES]: undefined;
  [SOUND_WITH_TIMER]: {
    soundName: string;
  };
  [MIX_EDITOR]: undefined;
};

export type UserWishesNavigationProp = StackNavigationProp<
  AppStackParamList,
  typeof USER_WISHES
>;

export type MixEditorNavigationProp = StackNavigationProp<
  AppStackParamList,
  typeof MIX_EDITOR
>;

export type MainNavigationProp = StackNavigationProp<
  AppStackParamList,
  typeof MAIN
>;

export type SoundWithTimerNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppStackParamList, typeof SOUND_WITH_TIMER>,
  StackNavigationProp<RootStackParamList>
>;

export type SoundWithTimerRouteProp = RouteProp<
  AppStackParamList,
  typeof SOUND_WITH_TIMER
>;

export const AppStack = createStackNavigator<AppStackParamList>();
export const RootStack = createStackNavigator<RootStackParamList>();
