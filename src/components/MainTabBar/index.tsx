import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import {FixedGrid} from '../FixedGrid';
import {config} from '../../config';

type Props = {
  buttons: readonly {title: string; icon: number}[];
  current: number;
  onPress?: (index: number) => void;
};

export const MainTabBar: FunctionComponent<Props> = ({
  buttons = [],
  current = 0,
  onPress,
}) => {
  function _onPress(i: number) {
    if (onPress) {
      onPress(i);
    }
  }
  return (
    <View style={styles.container}>
      <FixedGrid
        cols={buttons.length}
        items={buttons.map((btn, index) => (
          <TouchableNativeFeedback onPress={() => _onPress(index)}>
            <View
              style={[
                styles.btnContainer,
                current !== index ? styles.notActive : null,
              ]}>
              <Image source={btn.icon} style={styles.icon} />
              <Text style={styles.text}>{btn.title}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(25, 47, 106, 0.95)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  notActive: {
    opacity: 0.4,
  },
  btnContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: config.tabBar.height,
  },
  icon: {
    width: config.tabBar.iconSize,
    height: config.tabBar.iconSize,
  },
  text: {
    fontSize: config.tabBar.textFontSize,
    textAlign: 'center',
    color: '#fff',
  },
});
