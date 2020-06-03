import {PlaylistItem} from './types';
import {ASSETS_TREE} from 'src/assets';
import {entries} from 'lodash';

export type soundNames = keyof typeof ASSETS_TREE.sounds;

export const playlist: PlaylistItem[] = entries(ASSETS_TREE.sounds).map(
  ([_k, v]): PlaylistItem => {
    let k: soundNames = _k as soundNames;
    return {
      title: k,
      resource: v.sound,
    };
  },
);

export function findInPlaylistByName(name: string): PlaylistItem {
  return playlist[0];
}
