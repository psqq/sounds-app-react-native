import React, {FunctionComponent} from 'react';
import shortid from 'shortid';

import {GradientBackground} from '../../../components/GradientBackground';
import {config} from '../../../config';
import {TransparentStatusBar} from '../../../components/TransparentStatusBar';
import {ContainerWithoutStatusBar} from '../../../components/ContainerWithoutStatusBar';
import {RowButtonsWithIcons} from '../../../components/RowButtonsWithIcons';
import {Title} from '../../../components/Title';
import {MainNavigationProp} from 'src/router';
import {ICON_DAY, ICON_COFFEE_CUP, ICON_EYE, ICON_YOGA} from '../../../assets';

type Props = {
  navigation: MainNavigationProp;
};

const buttons = [
  {
    title: 'Сон',
    icon: ICON_DAY,
  },
  {
    title: 'Расслабиться',
    icon: ICON_COFFEE_CUP,
  },
  {
    title: 'Работа',
    icon: ICON_EYE,
  },
  {
    title: 'Медитация',
    icon: ICON_YOGA,
  },
];

export const Main: FunctionComponent<Props> = ({}) => {
  return (
    <GradientBackground colors={config.backgroundGradient}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text="Звуки дождя" />
        <RowButtonsWithIcons buttons={buttons} />
      </ContainerWithoutStatusBar>
    </GradientBackground>
  );
};
