import {getStatusBarHeight} from 'react-native-status-bar-height';

export const config = {
  get backgroundGradient() {
    return ['#192f6a', '#3b5998', '#4c669f'];
  },
  paddingForTabBar: 80,
  statusBarHeight: getStatusBarHeight(),
} as const;
