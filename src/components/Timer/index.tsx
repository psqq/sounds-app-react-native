import React, {FunctionComponent, useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {TimerState} from '../../store/timer/types';

type Props = {
  timer: TimerState;
};

export const Timer: FunctionComponent<Props> = ({timer}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  useEffect(() => {
    setSecondsLeft(() =>
      timer.startTime
        ? (timer.duration - (Date.now() - timer.startTime)) / 1000
        : timer.duration / 1000,
    );
    const intervalId = setInterval(() => {
      if (timer.pause) {
        return;
      }
      setSecondsLeft((s) => s - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);
  if (secondsLeft < 1) {
    return <Text style={styles.timerText}>{'00:00'}</Text>;
  }
  const text = new Date(Math.ceil(secondsLeft) * 1000)
    .toISOString()
    .substr(11, 8)
    .replace('00:', '');
  return <Text style={styles.timerText}>{text}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});
