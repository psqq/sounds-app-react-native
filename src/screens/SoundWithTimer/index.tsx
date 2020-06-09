import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {PausePlayButton} from 'src/components/PausePlayButton';
import {RootState, TypeOfConnect} from 'src/store';
import {BackgroundWithImage} from '../../components/BackgroundWithImage';
import {ContainerWithoutStatusBar} from '../../components/ContainerWithoutStatusBar';
import {Timer} from '../../components/Timer';
import {Title} from '../../components/Title';
import {TransparentStatusBar} from '../../components/TransparentStatusBar';
import {
  SoundWithTimerNavigationProp,
  SoundWithTimerRouteProp,
} from '../../router';
import {
  pauseCurrentMixAction,
  playCurrentMixAction,
  resumeCurrentMixAction,
} from '../../store/sound-manager/types';
import {HideScreenAbsoluteButton} from '../../components/HideScreenAbsoluteButton';

const storeEnhancer = connect(
  (state: RootState) => ({
    isPlaying: state.soundManager.currentMix.isPlaying,
    mix: state.soundManager.currentMix.mix,
    timer: state.timer,
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
  timer,
}) => {
  const soundName = route.params.soundName || mix.title;
  useEffect(() => {
    playMusic(soundName);
  }, [playMusic, soundName]);
  return (
    <BackgroundWithImage image={mix.fullImg}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text={route.params.soundName} />
        <View style={styles.container}>
          <View style={styles.timerContainer}>
            <Timer timer={timer} />
          </View>
          <View style={styles.pausePlayBtnContainer}>
            <PausePlayButton
              type={isPlaying ? 'pause' : 'play'}
              onPause={pauseMusic}
              onResume={resumeMusic}
            />
          </View>
        </View>
      </ContainerWithoutStatusBar>
      <HideScreenAbsoluteButton onPress={() => navigation.goBack()} />
    </BackgroundWithImage>
  );
};

SoundWithTimer = storeEnhancer(SoundWithTimer);

export {SoundWithTimer};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pausePlayBtnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
