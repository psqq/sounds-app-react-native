import React, {FunctionComponent} from 'react';

import {GradientBackground} from 'src/components/GradientBackground';
import {config} from 'src/config';
import {DefaultScrollView} from 'src/components/DefaultScrollView';
import {TransparentStatusBar} from 'src/components/TransparentStatusBar';
import {ContainerWithoutStatusBar} from 'src/components/ContainerWithoutStatusBar';
import {View} from 'react-native';
import {Resource} from '../../data/types';
import {BackgroundWithImage} from '../BackgroundWithImage';

type Props = {
  paddingForTabbar?: boolean;
  bg?: Resource;
};

export const MainTabPage: FunctionComponent<Props> = ({
  children,
  paddingForTabbar = true,
  bg,
}) => {
  const body = (
    <>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <DefaultScrollView>
          {children}
          {paddingForTabbar && (
            <View style={{height: config.paddingForTabBar}} />
          )}
        </DefaultScrollView>
      </ContainerWithoutStatusBar>
    </>
  );
  if (bg) {
    return <BackgroundWithImage image={bg}>{body}</BackgroundWithImage>;
  } else {
    return (
      <GradientBackground colors={config.backgroundGradient}>
        {body}
      </GradientBackground>
    );
  }
};
