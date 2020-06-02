import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {FixedGrid} from '../FixedGrid';

type Props = {
  buttons: readonly {title: string; icon: number}[];
  current: number;
  onPress?: (index: number) => void;
};

export const MainTabBar: FunctionComponent<Props> = ({
  buttons = [],
  current = 0,
}) => {
  return (
    <View style={styles.container}>
      <FixedGrid
        cols={buttons.length}
        items={buttons.map((btn, index) => (
          <View
            style={[
              styles.btnContainer,
              current !== index ? styles.notActive : null,
            ]}>
            <Image source={btn.icon} style={styles.icon} />
            <Text style={styles.text}>{btn.title}</Text>
          </View>
        ))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
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
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
});
