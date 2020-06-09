import {getStatusBarHeight} from 'react-native-status-bar-height';

export const config = {
  get backgroundGradient() {
    return ['#192f6a', '#3b5998', '#4c669f'];
  },
  tabBar: {
    iconSize: 20,
    textFontSize: 12,
    height: 60,
  },
  paddingForTabBar: 80,
  statusBarHeight: getStatusBarHeight(),
} as const;
