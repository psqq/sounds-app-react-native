import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';

import {Col, Row, Grid} from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';

const FirstScreen = () => {
  const buttons = [
    [
      {
        gradient: ['#6161c1', '#696ad0'],
        title: 'лучше засыпать',
        img: require('./assets/002-day.png'),
      },
      {
        gradient: ['#5664c7', '#596ad4'],
        title: 'снизить стресс',
        img: require('./assets/003-coffee-cup.png'),
      },
    ],
    [
      {
        gradient: ['#6d6694', '#776fa0'],
        title: 'концентрировать внимание',
        img: require('./assets/004-eye.png'),
      },
      {
        gradient: ['#6d55a4', '#725db5'],
        title: 'научиться медитировать',
        img: require('./assets/001-yoga.png'),
      },
    ],
  ];
  console.log(buttons[0][0].img);
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <Text style={styles.title}>Я хочу...</Text>
      <Grid style={styles.grid}>
        {buttons.map((col, i) => (
          <Col key={i}>
            {col.map((btn, j) => (
              <Row key={j}>
                <LinearGradient
                  colors={btn.gradient}
                  style={styles.cell}
                  key={btn.title}>
                  <Image style={styles.btnIcon} source={btn.img} />
                  <Text style={styles.cellText}>{btn.title}</Text>
                </LinearGradient>
              </Row>
            ))}
          </Col>
        ))}
      </Grid>
      <Button title="Продолжить" onPress={() => 0} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
  grid: {
    marginBottom: 40,
    marginTop: 40,
  },
  cell: {
    flex: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnIcon: {
    width: 100,
    height: 100,
  },
  cellText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
});

export default FirstScreen;
