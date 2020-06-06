import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {PausePlayButton} from 'src/components/PausePlayButton';
import {RootState, TypeOfConnect} from 'src/store';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';
import {GradientBackground} from '../../components/GradientBackground';
import {Title} from '../../components/Title';
import {TransparentStatusBar} from '../../components/TransparentStatusBar';
import {config} from '../../config';
import {
  SoundWithTimerNavigationProp,
  SoundWithTimerRouteProp,
} from '../../router';
import {
  pauseCurrentMixAction,
  playCurrentMixAction,
  resumeCurrentMixAction,
} from '../../store/sound-manager/types';
import {BackgroundWithImage} from '../../components/BackgroundWithImage';

const storeEnhancer = connect(
  (state: RootState) => ({
    isPlaying: state.soundManager.currentMix.isPlaying,
    mix: state.soundManager.currentMix.mix,
  }),
  (dispatch) => {
    return {
      playMusic: (name: string) => dispatch(playCurrentMixAction({name})),
      resumeMusic: () => dispatch(resumeCurrentMixAction()),
      pauseMusic: () => dispatch(pauseCurrentMixAction()),
    };
  },
);

type Props = {
  navigation: SoundWithTimerNavigationProp;
  route: SoundWithTimerRouteProp;
} & TypeOfConnect<typeof storeEnhancer>;

let SoundWithTimer: FunctionComponent<Props> = ({
  navigation,
  route,
  playMusic,
  pauseMusic,
  resumeMusic,
  isPlaying,
  mix,
}) => {
  useEffect(() => {
    playMusic(route.params.soundName);
  }, [playMusic, route.params.soundName]);
  return (
    <BackgroundWithImage image={mix.fullImg}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text={route.params.soundName} />
        <View style={styles.pausePlayBtnContainer}>
          <PausePlayButton
            type={isPlaying ? 'pause' : 'play'}
            onPause={pauseMusic}
            onResume={resumeMusic}
          />
        </View>
      </ContainerWithoutStatusBar>
    </BackgroundWithImage>
  );
};

SoundWithTimer = storeEnhancer(SoundWithTimer);

export {SoundWithTimer};

const styles = StyleSheet.create({
  pausePlayBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
