import React, {FunctionComponent} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  colors?: React.ReactText[];
  style?: ViewStyle;
};

export const GradientBackground: FunctionComponent<Props> = ({
  colors,
  style,
  children,
}) => {
  return (
    <LinearGradient
      colors={colors || ['#fff', '#000']}
      style={{...styles.container, ...style}}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
