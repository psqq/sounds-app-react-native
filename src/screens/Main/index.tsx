import React, {FunctionComponent} from 'react';

import {GradientBackground} from '../../components/GradientBackground';
import {config} from '../../config';
import {TransparentStatusBar} from '../../components/TransparentStatusBar';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';
import {Title} from '../../components/Title';
import {MainNavigationProp} from 'src/router';

type Props = {
  navigation: MainNavigationProp;
};

export const Main: FunctionComponent<Props> = ({}) => {
  return (
    <GradientBackground colors={config.backgroundGradient}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text="Звуки дождя" />
      </ContainerWithoutStatusBar>
    </GradientBackground>
  );
};
