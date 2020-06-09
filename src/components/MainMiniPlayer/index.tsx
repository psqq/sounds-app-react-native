import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, Text, TextStyle} from 'react-native';
import {config} from '../../config';
import {TimerState} from '../../store/timer/types';
import {Timer} from '../Timer';
import {Resource} from '../../data/types';
import {ASSETS_TREE} from '../../assets';

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
  plaingStatus,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.titleTimerContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Timer timer={timer} textStyle={styles.timerTextStyle} />
      </View>
      <View style={styles.playPauseStopButtonsConatiner}>
        <Image
          source={
            plaingStatus === 'play'
              ? ASSETS_TREE.icon.pause
              : ASSETS_TREE.icon.play
          }
          style={styles.playPauseIcon}
        />
        <Image source={ASSETS_TREE.icon.cancel} style={styles.playPauseIcon} />
      </View>
    </View>
  );
};

const PLAY_PAUSE_ICON_SIZE = config.tabBar.height / 2;
const textStyle: TextStyle = {
  fontSize: 14,
  color: 'white',
  textAlign: 'left',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(25, 47, 106, 0.95)',
    position: 'absolute',
    bottom: config.tabBar.height,
    left: 0,
    right: 0,
    height: config.tabBar.height,
    flexDirection: 'row',
  },
  icon: {
    flex: 0,
    width: config.tabBar.height - 10,
    height: config.tabBar.height - 10,
    margin: 5,
  },
  titleTimerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleText: {
    ...textStyle,
  },
  timerTextStyle: {
    ...textStyle,
  },
  playPauseIcon: {
    flex: 0,
    width: PLAY_PAUSE_ICON_SIZE / 2,
    height: PLAY_PAUSE_ICON_SIZE / 2,
    margin: (config.tabBar.height - PLAY_PAUSE_ICON_SIZE) / 2,
  },
  stopIcon: {},
  playPauseStopButtonsConatiner: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
