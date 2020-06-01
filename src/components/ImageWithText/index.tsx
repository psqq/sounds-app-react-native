import React, {FunctionComponent} from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';

type Props = {
  img: number;
  text: string;
  size: number;
};

const containerMargin = 10;

export const ImageWithText: FunctionComponent<Props> = ({img, text, size}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={[
        styles.container,
        {width: size - containerMargin * 2, height: size - containerMargin * 2},
      ]}
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
    margin: containerMargin,
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
