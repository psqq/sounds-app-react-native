import React, {FunctionComponent} from 'react';
import {Dimensions} from 'react-native';

import {RowButtonsWithIcons} from 'src/components/RowButtonsWithIcons';
import {Title} from 'src/components/Title';
import {
  ICON_DAY,
  ICON_COFFEE_CUP,
  ICON_EYE,
  ICON_YOGA,
  ASSETS_TREE,
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
    img: ASSETS_TREE.original.images.mixes.pic_mix_rain_in_forest_,
    title: 'Дождь в лесу',
  },
  {
    img: ASSETS_TREE.original.images.mixes.pic_mix_cold_winter_,
    title: 'Холодная зима',
  },
  {
    img: ASSETS_TREE.original.images.mixes.pic_mix_thunder_shower_,
    title: 'Гром',
  },
  {
    img: ASSETS_TREE.original.images.mixes.pic_mix_cafe_,
    title: 'Кафе',
  },
  {
    img: ASSETS_TREE.original.images.mixes.pic_mix_fire_,
    title: 'Огонь',
  },
  {
    img: ASSETS_TREE.original.images.mixes.pic_mix_deep_relaxation_,
    title: 'Расслабление',
  },
  {
    img: ASSETS_TREE.original.images.mixes.pic_mix_city_life_,
    title: 'Город',
  },
  {
    img: ASSETS_TREE.original.images.mixes.pic_mix_library_,
    title: 'Библиотека',
  },
  {
    img: ASSETS_TREE.original.images.mixes.pic_mix_cave_,
    title: 'Пещера',
  },
];

export type Props = {
  onTopButtonPress?: (title: string) => void;
  onPreviewPress?: (title: string) => void;
};

export const SoundsTab: FunctionComponent<Props> = ({onTopButtonPress}) => {
  const imgSize = Dimensions.get('screen').width / 2;
  return (
    <MainTabPage
      bg={ASSETS_TREE.original.images.backgrounds.pic_bg_fragment_sounds_}>
      <Title text="Звуки дождя" />
      <RowButtonsWithIcons
        buttons={buttons}
        onPress={(i) => {
          if (onTopButtonPress) {
            onTopButtonPress(buttons[i].title);
          }
        }}
      />
      <FixedGrid
        cols={2}
        items={items.map((item) => (
          <ImageWithText img={item.img} text={item.title} size={imgSize} />
        ))}
      />
    </MainTabPage>
  );
};
