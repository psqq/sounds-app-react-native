import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SoundInfo} from './all-sounds';

type Props = {
  allSounds: SoundInfo[];
};

export const Previews: FunctionComponent<Props> = ({allSounds}) => {
  return (
    <View>
      {allSounds.map((soundInfo) => (
        <Image
          resizeMode="contain"
          source={soundInfo.previewImgUrl}
          style={styles.previewImg}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  previewImg: {
    width: 100,
    height: 100,
  },
});
