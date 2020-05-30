import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Wrapper from './Wrapper';
import {TopButtons} from './TopButtons';
import {Previews} from './Previews';
import {
  SOUNDS_03_THUNDER_PREVIEW,
  ASSETS_TREE,
  SOUNDS_01_RAIN_PREVIEW,
  SOUNDS_02_STRONG_WIND_PREVIEW,
} from './assets';

export const SoundsScreen: FunctionComponent = () => {
  const items = [
    {
      img: SOUNDS_01_RAIN_PREVIEW,
      title: 'Дождь',
    },
    {
      img: SOUNDS_02_STRONG_WIND_PREVIEW,
      title: 'Сильный ветер',
    },
    {
      img: SOUNDS_03_THUNDER_PREVIEW,
      title: 'Гром',
    },
    {
      img: SOUNDS_01_RAIN_PREVIEW,
      title: 'Дождь',
    },
    {
      img: SOUNDS_02_STRONG_WIND_PREVIEW,
      title: 'Сильный ветер',
    },
    {
      img: SOUNDS_03_THUNDER_PREVIEW,
      title: 'Гром',
    },
    {
      img: SOUNDS_01_RAIN_PREVIEW,
      title: 'Дождь',
    },
    {
      img: SOUNDS_02_STRONG_WIND_PREVIEW,
      title: 'Сильный ветер',
    },
    {
      img: SOUNDS_03_THUNDER_PREVIEW,
      title: 'Гром',
    },
  ];
  return (
    <Wrapper containerStyle={styles.container}>
      <Text style={styles.title}>Звуки дождя</Text>
      <View style={styles.topButtonsContainer}>
        <TopButtons />
      </View>
      <Previews items={items} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 0,
  },
  topButtonsContainer: {},
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
    margin: 30,
  },
});
