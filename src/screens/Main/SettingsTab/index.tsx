import React, {FunctionComponent} from 'react';

import {Title} from 'src/components/Title';
import {MainTabPage} from 'src/components/MainTabPage';

export const SettingsTab: FunctionComponent = ({}) => {
  return (
    <MainTabPage>
      <Title text="Настройки" />
    </MainTabPage>
  );
};
