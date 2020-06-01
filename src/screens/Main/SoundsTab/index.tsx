import React, {FunctionComponent} from 'react';
import {ImageBackground, View, Text, Dimensions} from 'react-native';

import {RowButtonsWithIcons} from 'src/components/RowButtonsWithIcons';
import {Title} from 'src/components/Title';
import {
  ICON_DAY,
  ICON_COFFEE_CUP,
  ICON_EYE,
  ICON_YOGA,
  SOUNDS_01_RAIN_PREVIEW,
  SOUNDS_02_STRONG_WIND_PREVIEW,
  SOUNDS_03_THUNDER_PREVIEW,
} from 'src/assets';
import {MainTabPage} from 'src/components/MainTabPage';
import {FixedGrid} from 'src/components/FixedGrid';
import {ImageWithText} from 'src/components/ImageWithText';

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

const items = [
  {
    img: SOUNDS_01_RAIN_PREVIEW,
    title: 'Дождь',
  },
  {
    img: SOUNDS_02_STRONG_WIND_PREVIEW,
    title: 'Сильный ветер',
  },
  {
    img: SOUNDS_03_THUNDER_PREVIEW,
    title: 'Гром',
  },
  {
    img: SOUNDS_01_RAIN_PREVIEW,
    title: 'Дождь',
  },
  {
    img: SOUNDS_02_STRONG_WIND_PREVIEW,
    title: 'Сильный ветер',
  },
  {
    img: SOUNDS_03_THUNDER_PREVIEW,
    title: 'Гром',
  },
  {
    img: SOUNDS_01_RAIN_PREVIEW,
    title: 'Дождь',
  },
  {
    img: SOUNDS_02_STRONG_WIND_PREVIEW,
    title: 'Сильный ветер',
  },
  {
    img: SOUNDS_03_THUNDER_PREVIEW,
    title: 'Гром',
  },
];

const imgSize = Dimensions.get('screen').width / 2;

export const SoundsTab: FunctionComponent = ({}) => {
  return (
    <MainTabPage>
      <Title text="Звуки дождя" />
      <RowButtonsWithIcons buttons={buttons} />
      <FixedGrid
        cols={2}
        items={items.map((item) => (
          <ImageWithText img={item.img} text={item.title} size={imgSize} />
        ))}
      />
    </MainTabPage>
  );
};
