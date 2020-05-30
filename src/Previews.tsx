import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {SoundInfo} from './all-sounds';
import {SOUNDS_03_THUNDER_PREVIEW} from './assets';

type Props = {
  allSounds: SoundInfo[];
};

export const Previews: FunctionComponent<Props> = ({allSounds}) => {
  const source = SOUNDS_03_THUNDER_PREVIEW;
  console.log('source', source, typeof source);
  return <Image style={styles.previewImg} source={source} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  previewImg: {
    width: 100,
    height: 100,
  },
});
