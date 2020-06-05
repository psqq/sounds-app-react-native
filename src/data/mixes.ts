import {Resource} from './types';
import * as sounds from './sounds';
import {ASSETS_TREE} from 'src/assets';

export interface SoundMix {
  title: string;
  previewImg: Resource;
  fullImg: Resource;
  sounds: sounds.SoundItem[];
}

export const empty: SoundMix = {
  title: '',
  previewImg: NaN,
  fullImg: NaN,
  sounds: [],
};

export const sleep: SoundMix = {
  title: 'Сон',
  previewImg: ASSETS_TREE.original.images.mixes.pic_mix_rainy_day_,
  fullImg: ASSETS_TREE.original.images.mixes.pic_big_mix_rainy_day_,
  sounds: [sounds.rain],
};

export const relax: SoundMix = {
  title: 'Расслабиться',
  previewImg: ASSETS_TREE.original_2.autumn_forest.preview,
  fullImg: ASSETS_TREE.original_2.autumn_forest.bg,
  sounds: [sounds.autumn_forest],
};

export const work: SoundMix = {
  title: 'Работа',
  previewImg: ASSETS_TREE.original_2.desert.preview,
  fullImg: ASSETS_TREE.original_2.desert.bg,
  sounds: [sounds.desert],
};

export const meditation: SoundMix = {
  title: 'Медитация',
  previewImg: ASSETS_TREE.original_2.lake.preview,
  fullImg: ASSETS_TREE.original_2.lake.bg,
  sounds: [sounds.lake],
};

export const soundMixes: SoundMix[] = [sleep, relax, work, meditation];
