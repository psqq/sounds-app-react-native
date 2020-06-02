import React, {FunctionComponent} from 'react';

import {
  SoundWithTimerNavigationProp,
  SoundWithTimerRouteProp,
} from '../../router';
import {GradientBackground} from '../../components/GradientBackground';
import {config} from '../../config';
import {TransparentStatusBar} from '../../components/TransparentStatusBar';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';
import {Title} from '../../components/Title';

type Props = {
  navigation: SoundWithTimerNavigationProp;
  route: SoundWithTimerRouteProp;
};

export const SoundWithTimer: FunctionComponent<Props> = ({
  navigation,
  route,
}) => {
  return (
    <GradientBackground colors={config.backgroundGradient}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text={route.params.soundName} />
      </ContainerWithoutStatusBar>
    </GradientBackground>
  );
};
