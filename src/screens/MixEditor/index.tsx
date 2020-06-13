import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {ASSETS_TREE} from '../../assets';
import {BackgroundWithImage} from '../../components/BackgroundWithImage';
import {
  SoundWithTimerNavigationProp,
  SoundWithTimerRouteProp,
} from '../../router';
import {RootState, TypeOfConnect} from '../../store';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';

const storeEnhancer = connect(
  (state: RootState) => ({
    mix: state.mixEditor.mix,
    sounds: state.soundManager.sounds,
  }),
  (dispatch) => {
    return {};
  },
);

type Props = {
  navigation: SoundWithTimerNavigationProp;
  route: SoundWithTimerRouteProp;
} & TypeOfConnect<typeof storeEnhancer>;

let MixEditor: FunctionComponent<Props> = ({mix, sounds}) => {
  return (
    <BackgroundWithImage
      image={ASSETS_TREE.original.images.backgrounds.pic_bg_fragment_setting_}>
      <ContainerWithoutStatusBar>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Текущий выбор</Text>
          </View>
          <View>
            {mix.sounds.map((sound) => {
              return <Text>{sound.title}</Text>;
            })}
          </View>
          <View>
            <Text style={styles.title}>Все звуки</Text>
          </View>
          <View>
            {sounds.map((sound) => {
              return <Text>{sound.title}</Text>;
            })}
          </View>
          <View style={styles.bottomButtons}>
            <Text style={styles.bottomButton}>Отмена</Text>
            <Text style={styles.bottomButton}>Применить</Text>
            <Text style={styles.bottomButton}>Сбросить</Text>
          </View>
        </View>
      </ContainerWithoutStatusBar>
    </BackgroundWithImage>
  );
};

MixEditor = storeEnhancer(MixEditor);

export {MixEditor};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: '#bbb',
    fontSize: 15,
    margin: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
  },
  bottomButton: {
    flex: 1,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    padding: 5,
    borderRadius: 999,
    color: '#bbb',
    fontSize: 15,
  },
  touchable1: {
    flex: 1,
  },
});
