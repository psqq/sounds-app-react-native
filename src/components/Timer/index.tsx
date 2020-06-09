import React, {FunctionComponent, useState, useEffect} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {TimerState} from '../../store/timer/types';

type Props = {
  timer: TimerState;
  textStyle?: TextStyle;
};

export const Timer: FunctionComponent<Props> = ({timer, textStyle}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  useEffect(() => {
    let t = Date.now();
    function setRealTimeForTimer() {
      return timer.startTime
        ? (timer.duration - (t - timer.startTime)) / 1000
        : timer.duration / 1000;
    }
    setSecondsLeft(setRealTimeForTimer);
    let timeout = 1000 - (t % 1000) + 10;
    const go = () => {
      if (!timer.pause) {
        setSecondsLeft(setRealTimeForTimer);
        t = Date.now();
        timeout = 1000 - (t % 1000) + 10;
        setTimeout(go, timeout);
      }
    };
    go();
  }, [timer]);
  if (secondsLeft < 1) {
    return <Text style={styles.timerText}>{'00:00'}</Text>;
  }
  let sl = secondsLeft;
  if (timer.pause) {
    sl = timer.duration;
  }
  const text = new Date(Math.ceil(sl) * 1000)
    .toISOString()
    .substr(11, 8)
    .replace('00:', '');
  return <Text style={[styles.timerText, textStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  timerText: {
    fontSize: 60,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});
