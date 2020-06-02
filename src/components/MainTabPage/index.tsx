import React, {FunctionComponent} from 'react';

import {GradientBackground} from 'src/components/GradientBackground';
import {config} from 'src/config';
import {DefaultScrollView} from 'src/components/DefaultScrollView';
import {TransparentStatusBar} from 'src/components/TransparentStatusBar';
import {ContainerWithoutStatusBar} from 'src/components/ContainerWithoutStatusBar';
import {View} from 'react-native';

type Props = {
  paddingForTabbar?: boolean;
};

export const MainTabPage: FunctionComponent<Props> = ({
  children,
  paddingForTabbar = true,
}) => {
  return (
    <GradientBackground colors={config.backgroundGradient}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <DefaultScrollView>
          {children}
          {paddingForTabbar && (
            <View style={{height: config.paddingForTabBar}} />
          )}
        </DefaultScrollView>
      </ContainerWithoutStatusBar>
    </GradientBackground>
  );
};
