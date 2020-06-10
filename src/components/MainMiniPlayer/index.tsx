import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, Text, TextStyle} from 'react-native';
import {config} from '../../config';
import {TimerState} from '../../store/timer/types';
import {Timer} from '../Timer';
import {Resource} from '../../data/types';
import {ASSETS_TREE} from '../../assets';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

type Props = {
  title: string;
  timer: TimerState;
  icon: Resource;
  playingStatus: 'play' | 'pause';
  pressOnIconTitleOrTimer?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  onCancel?: () => void;
};

export const MainMiniPlayer: FunctionComponent<Props> = ({
  title,
  timer,
  icon,
  playingStatus: plaingStatus,
  pressOnIconTitleOrTimer,
  onPause,
  onPlay,
  onCancel,
}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={pressOnIconTitleOrTimer}
        style={styles.touchable1}
        containerStyle={styles.touchable1}>
        <View style={styles.iconTitleTimerContainer}>
          <Image source={icon} style={styles.icon} />
          <View style={styles.titleTimerContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Timer timer={timer} textStyle={styles.timerTextStyle} />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.playPauseStopButtonsConatiner}>
        <TouchableWithoutFeedback
          onPress={plaingStatus === 'play' ? onPause : onPlay}
          style={styles.touchable0}
          containerStyle={styles.touchable0}>
          <Image
            source={
              plaingStatus === 'play'
                ? ASSETS_TREE.icon.pause
                : ASSETS_TREE.icon.play
            }
            style={styles.playPauseIcon}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={onCancel}
          style={styles.touchable0}
          containerStyle={styles.touchable0}>
          <Image
            source={ASSETS_TREE.icon.cancel}
            style={styles.playPauseIcon}
          />
        </TouchableWithoutFeedback>
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
  iconTitleTimerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  touchable1: {
    flex: 1,
  },
  touchable0: {
    flex: 0,
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
    marginLeft: 10,
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
