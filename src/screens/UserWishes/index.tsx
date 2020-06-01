import React, {FunctionComponent} from 'react';

import {UserWishesNavigationProp, UserWishesnRouteProp} from '../../router';
import {GradientBackground} from '../../components/GradientBackground';
import {config} from '../../config';
import {TransparentStatusBar} from '../../components/TransparentStatusBar';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';
import {UserWishesButtons} from '../../components/UserWishesButtons';
import {Title} from '../../components/Title';
import {ContinueButton} from '../../components/ContinueButton';

type Props = {
  navigation: UserWishesNavigationProp;
  route: UserWishesnRouteProp;
};

const wishButtons = [
  {title: 'Лучше засыпать'},
  {title: 'Концентрировать внимание'},
  {title: 'Снизить стресс'},
  {title: 'Научиться медитировать'},
];

export const UserWishes: FunctionComponent<Props> = ({navigation}) => {
  return (
    <GradientBackground colors={config.backgroundGradient}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text="Я хочу..." />
        <UserWishesButtons buttons={wishButtons} />
        <ContinueButton />
      </ContainerWithoutStatusBar>
    </GradientBackground>
  );
};
