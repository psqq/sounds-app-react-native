import React, {useState, FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

type Props = {
  title: string;
  icon: number;
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

export const SwitchableWishButton: FunctionComponent<Props> = ({
  title,
  icon,
  onChange,
  checked = false,
}) => {
  function _onChange() {
    if (onChange) {
      onChange(!checked);
    }
  }
  return (
    <TouchableOpacity
      onPress={_onChange}
      style={[styles.container, checked ? styles.checkedContainer : null]}>
      <Image
        source={icon}
        style={[styles.icon, checked ? styles.checkedContent : null]}
      />
      <Text style={[styles.title, checked ? styles.checkedContent : null]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  checkedContainer: {
    borderColor: 'white',
    borderWidth: 2,
  },
  checkedContent: {
    opacity: 1,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    opacity: 0.7,
  },
  icon: {
    width: 80,
    height: 80,
    opacity: 0.7,
  },
});
