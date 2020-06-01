import React, {FunctionComponent} from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';

type Props = {
  img: number;
  text: string;
  size: number;
};

export const Previews: FunctionComponent<Props> = ({img, text, size}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={[styles.container, {width: size, height: size}]}
      imageStyle={styles.img}
      source={img}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column-reverse',
  },
  img: {
    borderRadius: 15,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
