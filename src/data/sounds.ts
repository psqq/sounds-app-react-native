import {Resource} from './types';
import {ASSETS_TREE} from 'src/assets';

export interface SoundItem {
  title: string;
  icon: Resource;
  sound: Resource;
  volume: number;
}

export const rain: SoundItem = {
  title: 'Дождь',
  icon: ASSETS_TREE.icon.rain,
  sound: ASSETS_TREE.sounds.rain,
  volume: 0.5,
};

export const strong_wind: SoundItem = {
  title: 'Сильный ветер',
  icon: ASSETS_TREE.icon.wind,
  sound: ASSETS_TREE.sounds.strong_wind,
  volume: 0.5,
};

export const thunder: SoundItem = {
  title: 'Гром',
  icon: ASSETS_TREE.icon.thunder,
  sound: ASSETS_TREE.sounds.thunder,
  volume: 0.5,
};

export const sounds: SoundItem[] = [rain, strong_wind, thunder];
