import React, {FunctionComponent} from 'react';

import {Title} from 'src/components/Title';
import {MainTabPage} from 'src/components/MainTabPage';
import {ASSETS_TREE} from '../../../assets';

export const SettingsTab: FunctionComponent = ({}) => {
  return (
    <MainTabPage
      bg={ASSETS_TREE.original.images.backgrounds.pic_bg_fragment_setting_}>
      <Title text="Настройки" />
    </MainTabPage>
  );
};
