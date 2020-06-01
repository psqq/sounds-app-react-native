import React, {useState, FunctionComponent} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

type Props = {
  title: string;
  icon: number;
  onChange?: (checked: boolean) => void;
};

export const SwitchableWishButton: FunctionComponent<Props> = ({
  title,
  icon,
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
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
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
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
  icon: {
    width: 80,
    height: 80,
  },
});
