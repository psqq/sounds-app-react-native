import React, {FunctionComponent} from 'react';

import {GradientBackground} from 'src/components/GradientBackground';
import {config} from 'src/config';
import {DefaultScrollView} from 'src/components/DefaultScrollView';
import {TransparentStatusBar} from 'src/components/TransparentStatusBar';
import {ContainerWithoutStatusBar} from 'src/components/ContainerWithoutStatusBar';

export const MainTabPage: FunctionComponent = ({children}) => {
  return (
    <GradientBackground colors={config.backgroundGradient}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <DefaultScrollView>{children}</DefaultScrollView>
      </ContainerWithoutStatusBar>
    </GradientBackground>
  );
};
