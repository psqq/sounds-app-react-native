import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ASSETS_TREE} from 'src/assets';
import {BackgroundWithImage} from '../../components/BackgroundWithImage';
import {ModalCustomTimerNavigationProp} from '../../router';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {navigation: ModalCustomTimerNavigationProp};

let ModalCustomTimer: FunctionComponent<Props> = ({navigation}) => {
  return (
    <BackgroundWithImage image={ASSETS_TREE.images.backgrounds.pic_bg_start_}>
      <View style={styles.container}>
        <Text style={styles.title}>Настраиваемый</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={(...args) => console.log(...args)}
        />
      </View>
    </BackgroundWithImage>
  );
};

export {ModalCustomTimer};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  title: {
    color: '#bbb',
    textAlign: 'center',
    flex: 0,
    fontSize: 15,
  },
});
