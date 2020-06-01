import React, {useState, FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {FixedGrid} from '../FixedGrid';
import {SwitchableWishButton} from '../SwitchableWishButton';

type Props = {
  buttons: {title: string; icon: number}[];
};

export const UserWishesButtons: FunctionComponent<Props> = ({buttons}) => {
  return (
    <FixedGrid
      gridStyle={styles.container}
      cols={2}
      items={buttons.map((btn) => (
        <SwitchableWishButton
          key={btn.title}
          title={btn.title}
          icon={btn.icon}
        />
      ))}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
