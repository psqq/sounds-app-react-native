import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {PausePlayButton} from 'src/components/PausePlayButton';
import {
  pauseMusic as createPauseMusicAction,
  playMusic as createPlayMusicAction,
  resumeMusic as createResumeMusicAction,
  RootState,
  TypeOfConnect,
} from 'src/store';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';
import {GradientBackground} from '../../components/GradientBackground';
import {Title} from '../../components/Title';
import {TransparentStatusBar} from '../../components/TransparentStatusBar';
import {config} from '../../config';
import {
  SoundWithTimerNavigationProp,
  SoundWithTimerRouteProp,
} from '../../router';

const storeEnhancer = connect(
  (state: RootState) => ({
    isPlaying: state.soundManager.currentMusic?.isPlaying,
  }),
  (dispatch) => {
    return {
      playMusic: (name: string) => dispatch(createPlayMusicAction(name)),
      resumeMusic: () => dispatch(createResumeMusicAction()),
      pauseMusic: () => dispatch(createPauseMusicAction()),
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
}) => {
  useEffect(() => {
    playMusic(route.params.soundName);
  }, [playMusic, route.params.soundName]);
  return (
    <GradientBackground colors={config.backgroundGradient}>
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
    </GradientBackground>
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
