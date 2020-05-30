import {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {isEqual} from 'lodash';

export const useStorage = <T extends Object>(initialValue: T, key: string) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    save() {
      let data = JSON.stringify(value);
      try {
        AsyncStorage.setItem(key, data);
      } catch (err) {
        console.error(err);
      }
    },
    async load() {
      let data;
      try {
        data = await AsyncStorage.getItem(key);
        if (data) {
          let parsedData = JSON.parse(data);
          if (!isEqual(value, parsedData)) {
            setValue(parsedData);
          }
        }
      } catch (err) {
        console.error(err);
      }
    },
  };
};
