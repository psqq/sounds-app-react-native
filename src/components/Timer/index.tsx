import React, {FunctionComponent} from 'react';
import {StyleSheet, Text} from 'react-native';

type Props = {
  text: string;
};

export const Title: FunctionComponent<Props> = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});
