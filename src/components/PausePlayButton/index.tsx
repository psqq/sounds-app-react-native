import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, ViewStyle} from 'react-native';
import {ICON_PAUSE, ICON_PLAY} from 'src/assets';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

type Props = {
  onResume?: () => void;
  onPause?: () => void;
  type: 'pause' | 'play';
};

export const PausePlayButton: FunctionComponent<Props> = ({
  onResume = () => undefined,
  onPause = () => undefined,
  type,
}) => {
  return (
    <View style={styles.container1}>
      <TouchableNativeFeedback
        onPress={type === 'pause' ? onPause : onResume}
        useForeground={true}>
        <View style={styles.container2}>
          <Image
            source={type === 'pause' ? ICON_PAUSE : ICON_PLAY}
            style={styles.icon}
          />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const container: ViewStyle = {
  padding: 10,
  backgroundColor: 'rgba(200, 200, 200, 0.7)',
  width: 150,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 25,
};

const styles = StyleSheet.create({
  container1: {
    ...container,
    overflow: 'hidden',
  },
  container2: {
    ...container,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
