import React, {FunctionComponent, useState, useEffect} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {TimerState} from '../../store/timer/types';

type Props = {
  timer: TimerState;
  textStyle?: TextStyle;
  onFinish?: () => void;
};

export const Timer: FunctionComponent<Props> = ({
  timer,
  textStyle,
  onFinish,
}) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  useEffect(() => {
    let t = Date.now();
    function setRealTimeForTimer() {
      return timer.startTime
        ? (timer.duration - (t - timer.startTime)) / 1000
        : timer.duration / 1000;
    }
    setSecondsLeft(setRealTimeForTimer);
    let timeout = 1000 - (t % 1000) + 10;
    let timeoutId: NodeJS.Timeout;
    const go = () => {
      if (!timer.pause) {
        setSecondsLeft(setRealTimeForTimer);
        t = Date.now();
        timeout = 1000 - (t % 1000) + 10;
        timeoutId = setTimeout(go, timeout);
      }
    };
    go();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timer]);
  if (secondsLeft < 1) {
    if (!finished && onFinish) {
      setFinished(true);
      onFinish();
    }
    return <Text style={[styles.timerText, textStyle]}>{'00:00'}</Text>;
  }
  let sl = secondsLeft;
  if (timer.pause) {
    sl = timer.duration;
  }
  let text = new Date(Math.ceil(sl * 1000)).toISOString().substr(11, 8);
  if (text.startsWith('00:')) {
    text = text.replace('00:', '');
  }
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
