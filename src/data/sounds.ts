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

export const autumn_forest: SoundItem = {
  title: 'Осенний лес',
  icon: ASSETS_TREE.original_2.autumn_forest.icon,
  sound: ASSETS_TREE.original_2.autumn_forest.sound,
  volume: 0.5,
};

export const desert: SoundItem = {
  title: 'Пустыня',
  icon: ASSETS_TREE.original_2.desert.icon,
  sound: ASSETS_TREE.original_2.desert.sound,
  volume: 0.5,
};

export const lake: SoundItem = {
  title: 'Пустыня',
  icon: ASSETS_TREE.original_2.lake.icon,
  sound: ASSETS_TREE.original_2.lake.sound,
  volume: 0.5,
};

export const rain_on_leaves: SoundItem = {
  title: 'Дождь по листьям',
  icon: ASSETS_TREE.original_2.rain_on_leaves.icon,
  sound: ASSETS_TREE.original_2.rain_on_leaves.sound,
  volume: 0.5,
};

export const rain_under_umbrella: SoundItem = {
  title: 'Дождь по зонтику',
  icon: ASSETS_TREE.original_2.rain_under_umbrella.icon,
  sound: ASSETS_TREE.original_2.rain_under_umbrella.sound,
  volume: 0.5,
};

export const sounds: SoundItem[] = [
  rain,
  strong_wind,
  thunder,
  autumn_forest,
  desert,
  lake,
  rain_on_leaves,
  rain_under_umbrella,
];
