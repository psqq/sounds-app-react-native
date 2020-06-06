import React, {FunctionComponent} from 'react';

import {Title} from 'src/components/Title';
import {MainTabPage} from 'src/components/MainTabPage';
import {View} from 'react-native';
import {ASSETS_TREE} from '../../../assets';

export const DiscoveriesTab: FunctionComponent = ({}) => {
  return (
    <MainTabPage
      bg={ASSETS_TREE.original.images.backgrounds.pic_bg_fragment_discover_}>
      <View>
        <Title text="Выбор редакции" />
      </View>
      <View>
        <Title text="Больше звуков" />
      </View>
      <View>
        <Title text="Популярные" />
      </View>
      <View>
        <Title text="Мои звуки" />
      </View>
    </MainTabPage>
  );
};
