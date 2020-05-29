import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useStorage} from './hooks/use-storage';

const FirstScreen = () => {
  const buttons = [
    [
      {
        gradient: ['#6161c1', '#696ad0'],
        checkedGradient: ['#3a3ac2', '#3f40d1'],
        title: 'лучше засыпать',
        id: 'лучше засыпать',
        img: require('./assets/002-day.png'),
      },
      {
        gradient: ['#5664c7', '#596ad4'],
        checkedGradient: ['#2e41c7', '#2f45d4'],
        title: 'снизить стресс',
        id: 'снизить стресс',
        img: require('./assets/003-coffee-cup.png'),
      },
    ],
    [
      {
        gradient: ['#6d6694', '#776fa0'],
        checkedGradient: ['#544894', '#5c4fa1'],
        title: 'концентрировать внимание',
        id: 'концентрировать внимание',
        img: require('./assets/004-eye.png'),
      },
      {
        gradient: ['#6d55a4', '#725db5'],
        checkedGradient: ['#5634a3', '#5638b5'],
        title: 'научиться медитировать',
        id: 'научиться медитировать',
        img: require('./assets/001-yoga.png'),
      },
    ],
  ];
  const {value: checked, setValue: setChecked, save: saveChecked} = useStorage<{
    [key: string]: boolean;
  }>({}, 'first-screen-checked-buttons');
  const toggle = (id: string) => {
    if (!checked[id]) {
      setChecked({...checked, [id]: true});
    } else {
      setChecked({...checked, [id]: false});
    }
  };
  const clickOnContinue = () => {
    saveChecked();
  };
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.title}>Я хочу...</Text>
      <Grid style={styles.grid}>
        {buttons.map((col, i) => (
          <Col key={i}>
            {col.map((btn, j) => (
              <Row key={j}>
                <TouchableOpacity
                  onPress={() => toggle(btn.id)}
                  style={styles.cell}
                  key={btn.title}>
                  <LinearGradient
                    colors={
                      checked[btn.id] ? btn.checkedGradient : btn.gradient
                    }
                    style={{
                      ...styles.cellGradient,
                      ...(checked[btn.id] ? styles.checked : {}),
                    }}>
                    <Image style={styles.btnIcon} source={btn.img} />
                    <Text style={styles.cellText}>{btn.title}</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </Row>
            ))}
          </Col>
        ))}
      </Grid>
      <Button title="Продолжить" onPress={clickOnContinue} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: getStatusBarHeight(),
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
  },
  cellGradient: {
    flex: 1,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  checked: {
    borderWidth: 1,
    borderColor: '#fff',
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
