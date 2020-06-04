import {Resource} from './types';
import * as sounds from './sounds';
import {ASSETS_TREE} from 'src/assets';

export interface SoundMix {
  title: string;
  previewImg: Resource;
  fullImg: Resource;
  sounds: sounds.SoundItem[];
}

export const empty = {
  title: '',
  previewImg: NaN,
  fullImg: NaN,
  sounds: [],
};

export const sleep = {
  title: 'Сон',
  previewImg: ASSETS_TREE.original.images.mixes.pic_mix_rainy_day_,
  fullImg: ASSETS_TREE.original.images.mixes.pic_big_mix_rainy_day_,
  sounds: [sounds.rain],
};

export const soundMixes: SoundMix[] = [sleep];
