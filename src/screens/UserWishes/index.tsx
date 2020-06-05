import React, {FunctionComponent} from 'react';
import {ICON_COFFEE_CUP, ICON_DAY, ICON_EYE, ICON_YOGA} from 'src/assets';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';
import {ContinueButton} from '../../components/ContinueButton';
import {GradientBackground} from '../../components/GradientBackground';
import {Title} from '../../components/Title';
import {TransparentStatusBar} from '../../components/TransparentStatusBar';
import {UserWishesButtons} from '../../components/UserWishesButtons';
import {config} from '../../config';
import {UserWishesNavigationProp} from '../../router';
import {connect} from 'react-redux';
import {RootState, TypeOfConnect} from '../../store';
import {
  PossibleUserWishes,
  addWishAction,
  removeWishAction,
  saveUserWishesToStorageAction,
} from '../../store/user-wishes/types';
import {Resource} from '../../data/types';

const storeEnhancer = connect(
  (state: RootState) => ({
    wishes: state.userWishes.wishes,
  }),
  (dispatch) => {
    return {
      addWish: (wish: PossibleUserWishes) => dispatch(addWishAction({wish})),
      removeWish: (wish: PossibleUserWishes) =>
        dispatch(removeWishAction({wish})),
      save: () => dispatch(saveUserWishesToStorageAction()),
    };
  },
);

type Props = {
  navigation: UserWishesNavigationProp;
} & TypeOfConnect<typeof storeEnhancer>;

interface WishButton {
  id: number;
  title: string;
  icon: Resource;
  checked: boolean;
}

export const UserWishes: FunctionComponent<Props> = ({
  navigation,
  wishes,
  addWish,
  removeWish,
  save,
}) => {
  const wishButtons: WishButton[] = [
    {
      id: PossibleUserWishes.WISH_TO_SLEEP_BETTER,
      title: 'Лучше засыпать',
      icon: ICON_DAY,
      checked: wishes.includes(PossibleUserWishes.WISH_TO_SLEEP_BETTER),
    },
    {
      id: PossibleUserWishes.WISH_TO_CONCENTRATE,
      title: 'Концентрировать внимание',
      icon: ICON_EYE,
      checked: wishes.includes(PossibleUserWishes.WISH_TO_CONCENTRATE),
    },
    {
      id: PossibleUserWishes.WISH_TO_REDUCE_STRESS,
      title: 'Снизить стресс',
      icon: ICON_COFFEE_CUP,
      checked: wishes.includes(PossibleUserWishes.WISH_TO_REDUCE_STRESS),
    },
    {
      id: PossibleUserWishes.WISH_TO_LEARN_TO_MEDITATE,
      title: 'Научиться медитировать',
      icon: ICON_YOGA,
      checked: wishes.includes(PossibleUserWishes.WISH_TO_LEARN_TO_MEDITATE),
    },
  ];
  function onContinuePress() {
    save();
    navigation.navigate('Main');
  }
  function onWishButtonChanged(i: number, val: boolean) {
    const btn = wishButtons[i];
    if (val) {
      addWish(btn.id);
    } else {
      removeWish(btn.id);
    }
  }
  return (
    <GradientBackground colors={config.backgroundGradient}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text="Я хочу..." />
        <UserWishesButtons
          buttons={wishButtons}
          onChange={onWishButtonChanged}
        />
        <ContinueButton onPress={onContinuePress} />
      </ContainerWithoutStatusBar>
    </GradientBackground>
  );
};
