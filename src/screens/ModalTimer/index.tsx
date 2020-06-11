import React, {FunctionComponent, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {ASSETS_TREE} from 'src/assets';
import {BackgroundWithImage} from '../../components/BackgroundWithImage';
import {RootState, TypeOfConnect} from '../../store';
import {ModalTimerNavigationProp, MODAL_CUSTOM_TIMER} from '../../router';
import {initTimerAction, disableTimerAction} from '../../store/timer/types';
import DateTimePicker from '@react-native-community/datetimepicker';
import {min} from 'lodash';

const storeEnhancer = connect(
  (state: RootState) => ({}),
  (dispatch) => {
    return {
      setTimer: (duration: number) =>
        dispatch(initTimerAction({duration, paused: false})),
      disableTimer: () => dispatch(disableTimerAction()),
    };
  },
);

type Props = {navigation: ModalTimerNavigationProp} & TypeOfConnect<
  typeof storeEnhancer
>;

let ModalTimer: FunctionComponent<Props> = ({
  navigation,
  setTimer,
  disableTimer,
}) => {
  const [timepickerState, setTimepickerState] = useState({
    show: false,
  });
  const buttons = [
    {
      title: '15 мин.',
      onPress: () => {
        setTimer(15 * 60 * 1000);
        navigation.goBack();
      },
    },
    {
      title: '30 мин.',
      onPress: () => {
        setTimer(30 * 60 * 1000);
        navigation.goBack();
      },
    },
    {
      title: '1 час',
      onPress: () => {
        setTimer(60 * 60 * 1000);
        navigation.goBack();
      },
    },
    {
      title: '2 часа',
      onPress: () => {
        setTimer(120 * 60 * 1000);
        navigation.goBack();
      },
    },
    {
      title: 'Настраиваемый',
      onPress: () => {
        setTimepickerState({
          ...timepickerState,
          show: true,
        });
      },
    },
    {
      title: 'Выкл',
      onPress: () => {
        disableTimer();
        navigation.goBack();
      },
    },
  ];
  return (
    <BackgroundWithImage image={ASSETS_TREE.images.backgrounds.pic_bg_start_}>
      <View style={styles.container}>
        <Text style={styles.title}>Установить таймер</Text>
        {buttons.map((btn) => (
          <View style={styles.btnContainer}>
            <TouchableNativeFeedback
              key={btn.title}
              onPress={() => {
                if (btn.onPress) {
                  btn.onPress();
                }
              }}>
              <Text style={styles.btnText}>{btn.title}</Text>
            </TouchableNativeFeedback>
          </View>
        ))}
      </View>
      <View style={styles.cancelContainer}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.touchable0}
          containerStyle={styles.touchable0}>
          <Text style={styles.cancelText}>Отмена</Text>
        </TouchableNativeFeedback>
      </View>
      {timepickerState.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            if (event.type === 'set') {
              const hours = selectedDate?.getHours() || 0;
              const minutes = selectedDate?.getMinutes() || 0;
              setTimer(hours * 60 * 60 * 1000 + minutes * 60 * 1000);
              navigation.goBack();
            }
          }}
        />
      )}
    </BackgroundWithImage>
  );
};

ModalTimer = storeEnhancer(ModalTimer);

export {ModalTimer};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
  cancelContainer: {
    flex: 0,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  title: {
    color: '#bbb',
    textAlign: 'center',
    flex: 0,
    fontSize: 15,
  },
  btnContainer: {
    flex: 0,
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#bbb',
    marginTop: 20,
    padding: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
  },
  cancelText: {
    color: '#bbb',
    textAlign: 'center',
    flex: 0,
    fontSize: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  touchable1: {
    flex: 1,
  },
  touchable0: {
    flex: 0,
  },
});
