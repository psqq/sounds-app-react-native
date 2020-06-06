import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {ASSETS_TREE} from '../../assets';
import {config} from '../../config';

type Props = {
  onPress?: () => void;
};

export const HideScreenAbsoluteButton: FunctionComponent<Props> = ({
  onPress,
}) => {
  console.log('press 1');
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() => {
          if (onPress) {
            onPress();
          }
          console.log('press 2');
        }}>
        <View style={styles.btnContainer}>
          <Image source={ASSETS_TREE.icon.down_arrow} style={styles.btnIcon} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: config.statusBarHeight,
  },
  btnContainer: {
    margin: 5,
    marginTop: 0,
    padding: 12,
  },
  btnIcon: {
    width: 30,
    height: 30,
  },
});
