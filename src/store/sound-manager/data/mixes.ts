import {Resource} from '../types';
import * as sounds from './sounds';
import {ASSETS_TREE} from '../../../assets';

export interface SoundMix {
  title: string;
  previewImg: Resource;
  fullImg: Resource;
  sounds: sounds.SoundItem[];
}

export const soundMixes: SoundMix[] = [
  {
    title: 'Сон',
    previewImg: ASSETS_TREE.original.images.mixes.pic_mix_rainy_day_,
    fullImg: ASSETS_TREE.original.images.mixes.pic_big_mix_rainy_day_,
    sounds: [sounds.rain],
  },
];
