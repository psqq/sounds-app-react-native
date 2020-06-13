import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {RootState, TypeOfConnect} from '../../store';
import {BackgroundWithImage} from '../../components/BackgroundWithImage';
import {
  SoundWithTimerNavigationProp,
  SoundWithTimerRouteProp,
} from '../../router';
import {ASSETS_TREE} from '../../assets';

const storeEnhancer = connect(
  (state: RootState) => ({}),
  (dispatch) => {
    return {};
  },
);

type Props = {
  navigation: SoundWithTimerNavigationProp;
  route: SoundWithTimerRouteProp;
} & TypeOfConnect<typeof storeEnhancer>;

let MixEditor: FunctionComponent<Props> = ({}) => {
  return (
    <BackgroundWithImage
      image={ASSETS_TREE.original.images.backgrounds.pic_bg_fragment_setting_}>
      <View>
        <Text>Текущий выбор</Text>
      </View>
      <View>
        <Text>Текущий выбор</Text>
      </View>
      <View>
        <Text>Отмена</Text>
        <Text>Применить</Text>
        <Text>Сбросить</Text>
      </View>
    </BackgroundWithImage>
  );
};

MixEditor = storeEnhancer(MixEditor);

export {MixEditor};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
