import React, {FunctionComponent} from 'react';

import {Title} from 'src/components/Title';
import {MainTabPage} from 'src/components/MainTabPage';
import {View} from 'react-native';

export const DiscoveriesTab: FunctionComponent = ({}) => {
  return (
    <MainTabPage>
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
