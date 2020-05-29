import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  SoundsScreen: undefined;
  FirstScreen: {userId: string};
};

export type FirstScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FirstScreen'
>;

export type FirstScreennRouteProp = RouteProp<
  RootStackParamList,
  'FirstScreen'
>;

export const Stack = createStackNavigator<RootStackParamList>();
