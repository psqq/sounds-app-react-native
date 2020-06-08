import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {config} from '../../config';
import {TimerState} from '../../store/timer/types';
import {Timer} from '../Timer';
import {Resource} from '../../data/types';

type Props = {
  title: string;
  timer: TimerState;
  icon: Resource;
  plaingStatus: 'play' | 'pause';
};

export const MainMiniPlayer: FunctionComponent<Props> = ({
  title,
  timer,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View>
        <Text>{title}</Text>
        <Timer timer={timer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(25, 47, 106, 0.95)',
    position: 'absolute',
    bottom: config.tabBar.height,
    left: 0,
    right: 0,
    height: config.tabBar.height,
  },
  icon: {
    flex: 0,
  },
  titleTimerContainer: {
    flex: 1,
  },
  playPauseIcon: {},
  stopIcon: {},
});
