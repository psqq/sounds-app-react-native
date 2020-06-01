import React, {useState, FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  title: string;
  onChange?: (checked: boolean) => void;
};

export const SwitchableWishButton: FunctionComponent<Props> = ({
  title,
  onChange,
}) => {
  const [checked, setChecked] = useState<boolean>(false);
  function toggle() {
    setChecked(!checked);
    if (onChange) {
      onChange(checked);
    }
  }
  return (
    <TouchableOpacity onPress={() => toggle()} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
});
