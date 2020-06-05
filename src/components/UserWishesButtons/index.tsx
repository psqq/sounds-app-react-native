import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {FixedGrid} from '../FixedGrid';
import {SwitchableWishButton} from '../SwitchableWishButton';

type Props = {
  buttons: {title: string; icon: number; checked: boolean}[];
  onChange?: (index: number, value: boolean) => void;
};

export const UserWishesButtons: FunctionComponent<Props> = ({
  buttons,
  onChange,
}) => {
  return (
    <FixedGrid
      gridStyle={styles.container}
      cols={2}
      items={buttons.map((btn, index) => (
        <SwitchableWishButton
          key={btn.title}
          title={btn.title}
          icon={btn.icon}
          checked={btn.checked}
          onChange={(checked) => {
            if (onChange) {
              onChange(index, checked);
            }
          }}
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
