import {Resource} from './types';
import * as sounds from './sounds';
import {ASSETS_TREE} from 'src/assets';
import shortid from 'shortid';

export interface SoundMix {
  id: string;
  title: string;
  previewImg: Resource;
  fullImg: Resource;
  sounds: ReadonlyArray<Readonly<sounds.SoundItem>>;
}

export const empty: Readonly<SoundMix> = {
  id: shortid(),
  title: '',
  previewImg: NaN,
  fullImg: NaN,
  sounds: [],
};

export const sleep: Readonly<SoundMix> = {
  id: shortid(),
  title: 'Сон',
  previewImg: ASSETS_TREE.original.images.mixes.pic_mix_rainy_day_,
  fullImg: ASSETS_TREE.original.images.mixes.pic_big_mix_rainy_day_,
  sounds: [sounds.rain, sounds.thunder, sounds.rain_on_leaves],
};

export const relax: Readonly<SoundMix> = {
  id: shortid(),
  title: 'Расслабиться',
  previewImg: ASSETS_TREE.original_2.autumn_forest.preview,
  fullImg: ASSETS_TREE.original_2.autumn_forest.bg,
  sounds: [sounds.autumn_forest],
};

export const work: Readonly<SoundMix> = {
  id: shortid(),
  title: 'Работа',
  previewImg: ASSETS_TREE.original_2.desert.preview,
  fullImg: ASSETS_TREE.original_2.desert.bg,
  sounds: [sounds.desert],
};

export const meditation: Readonly<SoundMix> = {
  id: shortid(),
  title: 'Медитация',
  previewImg: ASSETS_TREE.original_2.lake.preview,
  fullImg: ASSETS_TREE.original_2.lake.bg,
  sounds: [sounds.lake],
};

export const soundMixes: ReadonlyArray<Readonly<SoundMix>> = [
  sleep,
  relax,
  work,
  meditation,
];

export function findMixByName(name: string): SoundMix | undefined {
  const foundMix = soundMixes.find(
    (mix) => mix.title.toLowerCase() === name.toLowerCase(),
  );
  return foundMix;
}
