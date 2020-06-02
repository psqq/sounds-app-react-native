import React, {FunctionComponent} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {FixedGrid} from '../FixedGrid';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

type Props = {
  buttons: readonly {title: string; icon: number}[];
  onPress?: (index: number) => void;
};

export const RowButtonsWithIcons: FunctionComponent<Props> = ({
  buttons = [],
  onPress = () => null,
}) => {
  return (
    <View style={styles.container}>
      <FixedGrid
        cols={buttons.length}
        items={buttons.map((btn, index) => (
          <TouchableWithoutFeedback
            onPress={() => {
              if (onPress) {
                onPress(index);
              }
            }}>
            <View style={styles.btnContainer}>
              <View style={styles.iconContainer}>
                <Image source={btn.icon} style={styles.icon} />
              </View>
              <Text style={styles.text}>{btn.title}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 25,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 35,
    height: 35,
  },
  iconContainer: {
    backgroundColor: '#192f6a',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
});
