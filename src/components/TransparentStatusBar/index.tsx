import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';

export const TransparentStatusBar: FunctionComponent = () => {
  return <StatusBar translucent backgroundColor="transparent" />;
};
