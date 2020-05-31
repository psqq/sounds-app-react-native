import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  text: string;
};

export const Title: FunctionComponent<Props> = ({text}) => {
  return <View>{text}</View>;
};

const styles = StyleSheet.create({});
