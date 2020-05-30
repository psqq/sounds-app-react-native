import React, {FunctionComponent} from 'react';
import {StyleSheet, StatusBar, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';

type Props = {
  containerStyle?: ViewStyle;
};

const Wrapper: FunctionComponent<Props> = (props) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{...styles.container, ...props.containerStyle}}>
      <StatusBar translucent backgroundColor="transparent" />
      {props.children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },
});

export default Wrapper;
