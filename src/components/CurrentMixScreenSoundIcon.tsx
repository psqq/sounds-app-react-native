import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Resource} from '../data/types';

type Props = {
  icon: Resource;
  text: string;
  topRightText?: string;
  onPress?: () => void;
};

export const SoundIconWithVolume: FunctionComponent<Props> = ({
  icon,
  text,
  topRightText,
  onPress = () => null,
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}>
      <View style={styles.extraContainer}>
        <View style={styles.btnContainer}>
          <View style={styles.iconContainer}>
            <Image source={icon} style={styles.icon} />
          </View>
          <Text style={styles.text}>{text}</Text>
        </View>
        {topRightText && (
          <View style={styles.topRightContainer}>
            <Text style={styles.text}>{topRightText}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  topRightContainer: {
    position: 'absolute',
    right: 2,
    top: 2,
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    zIndex: 1000,
  },
  iconContainer: {
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    width: 60,
    height: 60,
    borderRadius: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 35,
    height: 35,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
  extraContainer: {
    paddingTop: 10,
    paddingRight: 10,
  },
});
