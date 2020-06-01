import React, {FunctionComponent} from 'react';

import {MainNavigationProp} from 'src/router';
import {SoundsTab} from './SoundsTab';

type Props = {
  navigation: MainNavigationProp;
};

export const Main: FunctionComponent<Props> = ({}) => {
  return <SoundsTab />;
};
