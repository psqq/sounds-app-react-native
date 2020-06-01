import React, {FunctionComponent} from 'react';
import {StyleSheet, Button, View} from 'react-native';

type Props = {
  onPress?: () => void;
};

export const ContinueButton: FunctionComponent<Props> = ({
  onPress = () => undefined,
}) => {
  return (
    <View style={styles.container}>
      <Button title="Продолжить" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
