import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import {ASSETS_TREE} from 'src/assets';
import {BackgroundWithImage} from '../../components/BackgroundWithImage';
import {RootState, TypeOfConnect} from '../../store';
import {Text} from 'react-native';

const storeEnhancer = connect(
  (state: RootState) => ({}),
  (dispatch) => {
    return {};
  },
);

type Props = TypeOfConnect<typeof storeEnhancer>;

let ModalTimer: FunctionComponent<Props> = ({}) => {
  return (
    <BackgroundWithImage image={ASSETS_TREE.images.backgrounds.pic_bg_start_}>
      <Text>Установить таймер</Text>
    </BackgroundWithImage>
  );
};

ModalTimer = storeEnhancer(ModalTimer);

export {ModalTimer};
