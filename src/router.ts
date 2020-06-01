import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

export type RootStackParamList = {
  Main: undefined;
  UserWishes: undefined;
};

export type UserWishesNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserWishes'
>;

export type MainNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Main'
>;

export const Stack = createStackNavigator<RootStackParamList>();
