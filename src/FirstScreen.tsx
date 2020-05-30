import React, {useState, FunctionComponent} from 'react';
import {StyleSheet, Text, Button, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {FirstScreenNavigationProp, FirstScreennRouteProp} from './router';
import AsyncStorage from '@react-native-community/async-storage';

import {
  FirstScreenButtons,
  CheckedButtons,
} from './components/FirstScreenButtons';

type Props = {
  navigation: FirstScreenNavigationProp;
  route: FirstScreennRouteProp;
};

export const FirstScreen: FunctionComponent<Props> = ({navigation}) => {
  const [checked, setChecked] = useState<CheckedButtons>({});
  const onChangeCheckedButtons = (newChecked: CheckedButtons) => {
    setChecked(newChecked);
  };
  const clickOnContinue = () => {
    AsyncStorage.setItem(
      'first-screen-checked-buttons',
      JSON.stringify(checked),
    );
    navigation.navigate('SoundsScreen');
  };
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.title}>Я хочу...</Text>
      <FirstScreenButtons onChange={onChangeCheckedButtons} />
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
});
