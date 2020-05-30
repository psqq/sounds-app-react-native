import React, {FunctionComponent} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const TopButtons: FunctionComponent = () => {
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
  );
};

const styles = StyleSheet.create({
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
});
