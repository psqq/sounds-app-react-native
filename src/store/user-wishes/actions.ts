import {PossibleUserWishes, AddWishAction, ADD_WISH} from './types';

export function addWish(wish: PossibleUserWishes): AddWishAction {
  return {type: ADD_WISH, payload: wish};
}
