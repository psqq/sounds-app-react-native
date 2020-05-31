import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {UserWishesNavigationProp, UserWishesnRouteProp} from '../../router';

import {Background} from '../../components/Background';
import {config} from '../../config';

type Props = {
  navigation: UserWishesNavigationProp;
  route: UserWishesnRouteProp;
};

export const UserWishes: FunctionComponent<Props> = ({navigation}) => {
  return (
    <Background colors={config.backgroundGradient}>
      <Text>User Wishes</Text>
    </Background>
  );
};
