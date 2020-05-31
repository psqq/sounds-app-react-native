import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  SoundsScreen: undefined;
  UserWishes: {userId: string};
};

export type UserWishesNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserWishes'
>;

export type UserWishesnRouteProp = RouteProp<RootStackParamList, 'UserWishes'>;

export const Stack = createStackNavigator<RootStackParamList>();
