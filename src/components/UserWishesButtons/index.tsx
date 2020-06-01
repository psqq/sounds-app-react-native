import React, {useState, FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {FixedGrid} from '../FixedGrid';
import {SwitchableWishButton} from '../SwitchableWishButton';

type Props = {
  buttons: {title: string}[];
};

export const UserWishesButtons: FunctionComponent<Props> = ({buttons}) => {
  return (
    <FixedGrid
      gridStyle={styles.container}
      cols={2}
      items={buttons.map((btn) => (
        <SwitchableWishButton title={btn.title} />
      ))}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
