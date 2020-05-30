import React, {FunctionComponent} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FixedGrid} from './components/FixedGrid';

type Props = {
  items: {img: number; title: string}[];
};

export const Previews: FunctionComponent<Props> = ({items}) => {
  return (
    <ScrollView style={styles.container} bounces={false} overScrollMode="never">
      <FixedGrid
        cols={2}
        items={items.map((item) => (
          <ImageBackground
            resizeMode="cover"
            style={styles.previewImgContainer}
            imageStyle={styles.previewImg}
            source={item.img}>
            <View style={styles.previewImgTextContainer}>
              <Text style={styles.previewImgText}>{item.title}</Text>
            </View>
          </ImageBackground>
        ))}
      />
    </ScrollView>
  );
};

const imgSize = (Dimensions.get('screen').width - 30 - 40) / 2;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
  },
  previewImgContainer: {
    width: imgSize,
    height: imgSize,
    margin: 10,
    flexDirection: 'column-reverse',
  },
  previewImg: {
    borderRadius: 15,
  },
  previewImgTextContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
  },
  previewImgText: {
    color: 'white',
    fontSize: 15,
  },
});
