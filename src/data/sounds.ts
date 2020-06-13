import {Resource} from './types';
import {ASSETS_TREE} from 'src/assets';
import shortid from 'shortid';

export interface SoundItem {
  id: string;
  title: string;
  icon: Resource;
  sound: Resource;
  volume: number;
}

export const rain: Readonly<SoundItem> = {
  id: shortid(),
  title: 'Дождь',
  icon: ASSETS_TREE.icon.rain,
  sound: ASSETS_TREE.sounds.rain,
  volume: 0.5,
};

export const strong_wind: Readonly<SoundItem> = {
  id: shortid(),
  title: 'Сильный ветер',
  icon: ASSETS_TREE.icon.wind,
  sound: ASSETS_TREE.sounds.strong_wind,
  volume: 0.5,
};

export const thunder: Readonly<SoundItem> = {
  id: shortid(),
  title: 'Гром',
  icon: ASSETS_TREE.icon.thunder,
  sound: ASSETS_TREE.sounds.thunder,
  volume: 0.5,
};

export const autumn_forest: Readonly<SoundItem> = {
  id: shortid(),
  title: 'Осенний лес',
  icon: ASSETS_TREE.original_2.autumn_forest.icon,
  sound: ASSETS_TREE.original_2.autumn_forest.sound,
  volume: 0.5,
};

export const desert: Readonly<SoundItem> = {
  id: shortid(),
  title: 'Пустыня',
  icon: ASSETS_TREE.original_2.desert.icon,
  sound: ASSETS_TREE.original_2.desert.sound,
  volume: 0.5,
};

export const lake: Readonly<SoundItem> = {
  id: shortid(),
  title: 'Озеро',
  icon: ASSETS_TREE.original_2.lake.icon,
  sound: ASSETS_TREE.original_2.lake.sound,
  volume: 0.5,
};

export const rain_on_leaves: Readonly<SoundItem> = {
  id: shortid(),
  title: 'Дождь по листьям',
  icon: ASSETS_TREE.original_2.rain_on_leaves.icon,
  sound: ASSETS_TREE.original_2.rain_on_leaves.sound,
  volume: 0.5,
};

export const rain_under_umbrella: Readonly<SoundItem> = {
  id: shortid(),
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
