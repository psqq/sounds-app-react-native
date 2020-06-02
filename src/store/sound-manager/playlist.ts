import {OneSound} from './types';
import shortid from 'shortid';
import {ASSETS_TREE} from 'src/assets';
import {entries} from 'lodash';

type soundNames = keyof typeof ASSETS_TREE.sounds;

export const playlist: OneSound[] = entries(ASSETS_TREE.sounds).map(
  ([_k, v]) => {
    let k: soundNames = _k as soundNames;
    return {
      id: shortid(),
      title: k,
      resource: v.sound,
      isPlaying: false,
    };
  },
);
