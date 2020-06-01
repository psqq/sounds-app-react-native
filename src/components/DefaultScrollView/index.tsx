import React, {FunctionComponent} from 'react';
import {ScrollView} from 'react-native';

export const DefaultScrollView: FunctionComponent = ({children}) => {
  return (
    <ScrollView bounces={false} overScrollMode="never">
      {children}
    </ScrollView>
  );
};
