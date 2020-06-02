import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Main: undefined;
  UserWishes: undefined;
  SoundWithTimer: {
    soundName: string;
  };
};

export type UserWishesNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserWishes'
>;

export type MainNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

export type SoundWithTimerNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SoundWithTimer'
>;

export type SoundWithTimerRouteProp = RouteProp<
  RootStackParamList,
  'SoundWithTimer'
>;

export const Stack = createStackNavigator<RootStackParamList>();
