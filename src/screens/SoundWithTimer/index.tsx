import React, {FunctionComponent, useEffect} from 'react';
import {connect} from 'react-redux';

import {
  SoundWithTimerNavigationProp,
  SoundWithTimerRouteProp,
} from '../../router';
import {GradientBackground} from '../../components/GradientBackground';
import {config} from '../../config';
import {TransparentStatusBar} from '../../components/TransparentStatusBar';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';
import {Title} from '../../components/Title';
import {RootState, TypeOfConnect, playSoundByName} from 'src/store';

const storeEnhancer = connect(
  (state: RootState) => ({
    ...state,
  }),
  {
    playSound: playSoundByName,
  },
);

type Props = {
  navigation: SoundWithTimerNavigationProp;
  route: SoundWithTimerRouteProp;
} & TypeOfConnect<typeof storeEnhancer>;

let SoundWithTimer: FunctionComponent<Props> = ({
  navigation,
  route,
  playSound,
}) => {
  useEffect(() => {
    playSound(route.params.soundName);
  }, [playSound, route.params.soundName]);
  return (
    <GradientBackground colors={config.backgroundGradient}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text={route.params.soundName} />
      </ContainerWithoutStatusBar>
    </GradientBackground>
  );
};

SoundWithTimer = storeEnhancer(SoundWithTimer);

export {SoundWithTimer};
