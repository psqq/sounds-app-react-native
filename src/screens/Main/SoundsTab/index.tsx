import React, {FunctionComponent} from 'react';

import {RowButtonsWithIcons} from 'src/components/RowButtonsWithIcons';
import {Title} from 'src/components/Title';
import {ICON_DAY, ICON_COFFEE_CUP, ICON_EYE, ICON_YOGA} from 'src/assets';
import {MainTabPage} from 'src/components/MainTabPage';

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

export const SoundsTab: FunctionComponent = ({}) => {
  return (
    <MainTabPage>
      <Title text="Звуки дождя" />
      <RowButtonsWithIcons buttons={buttons} />
    </MainTabPage>
  );
};
