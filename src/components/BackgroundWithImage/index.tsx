import React, {FunctionComponent} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Resource} from '../../data/types';

type Props = {
  image: Resource;
};

export const BackgroundWithImage: FunctionComponent<Props> = ({
  image,
  children,
}) => {
  return (
    <ImageBackground source={image} style={styles.container}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
