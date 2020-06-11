import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {ASSETS_TREE} from 'src/assets';
import {BackgroundWithImage} from '../../components/BackgroundWithImage';
import {RootState, TypeOfConnect} from '../../store';
import {ModalTimerNavigationProp} from '../../router';
import {initTimerAction} from '../../store/timer/types';

const storeEnhancer = connect(
  (state: RootState) => ({}),
  (dispatch) => {
    return {
      setTimer: (duration: number) =>
        dispatch(initTimerAction({duration, paused: false})),
    };
  },
);

type Props = {navigation: ModalTimerNavigationProp} & TypeOfConnect<
  typeof storeEnhancer
>;

let ModalCustomTimer: FunctionComponent<Props> = ({navigation, setTimer}) => {
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
    },
    {
      title: 'Выкл',
    },
  ];
  return (
    <BackgroundWithImage image={ASSETS_TREE.images.backgrounds.pic_bg_start_}>
      <View style={styles.container}>
        <Text style={styles.title}>Установить таймер</Text>
        {buttons.map((btn) => (
          <TouchableNativeFeedback
            key={btn.title}
            onPress={() => {
              if (btn.onPress) {
                btn.onPress();
              }
            }}>
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}>{btn.title}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
    </BackgroundWithImage>
  );
};

ModalCustomTimer = storeEnhancer(ModalCustomTimer);

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
});
