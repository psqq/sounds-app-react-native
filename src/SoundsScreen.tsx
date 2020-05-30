import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Wrapper from './Wrapper';

const SoundsScreen: FunctionComponent = () => {
  const bgImage = require('./assets/photo-of-thunderstorm-2531709.jpg');
  const topButtons = [
    {
      title: 'Сон',
      img: require('./assets/002-day.png'),
    },
    {
      title: 'Расслабиться',
      img: require('./assets/003-coffee-cup.png'),
    },
    {
      title: 'Работа',
      img: require('./assets/004-eye.png'),
    },
    {
      title: 'Медитация',
      img: require('./assets/001-yoga.png'),
    },
  ];
  return (
    <Wrapper containerStyle={styles.container}>
      <Text style={styles.title}>Звуки дождя</Text>
      <View style={styles.topButtons}>
        {topButtons.map((btn) => (
          <View key={btn.title} style={styles.topBtn}>
            <View style={styles.topBtnImageContainer}>
              <Image source={btn.img} style={styles.topBtnImage} />
            </View>
            <Text style={styles.topBtnTitle}>{btn.title}</Text>
          </View>
        ))}
      </View>
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
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  topBtnImageContainer: {
    backgroundColor: '#192f6a',
    width: 60,
    height: 60,
    borderRadius: 35,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBtnImage: {
    width: 35,
    height: 35,
  },
  topBtn: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topBtnTitle: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
  bgImage: {
    width: '100%',
    resizeMode: 'cover',
  },
});

export default SoundsScreen;
