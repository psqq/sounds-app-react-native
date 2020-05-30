import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Wrapper from './Wrapper';
import {TopButtons} from './TopButtons';
import {getAllSounds} from './all-sounds';
import {Previews} from './Previews';

export const SoundsScreen: FunctionComponent = () => {
  const allSound = getAllSounds();
  return (
    <Wrapper containerStyle={styles.container}>
      <Text style={styles.title}>Звуки дождя</Text>
      <TopButtons />
      <Previews allSounds={allSound} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
    margin: 30,
  },
});
