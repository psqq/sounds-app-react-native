import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
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
  MIX_EDITOR,
} from '../../router';
import {
  pauseCurrentMixAction,
  playCurrentMixAction,
  resumeCurrentMixAction,
} from '../../store/sound-manager/types';
import {HideScreenAbsoluteButton} from '../../components/HideScreenAbsoluteButton';
import {SoundIconWithVolume as CurrentMixScreenSoundIcon} from '../../components/CurrentMixScreenSoundIcon';
import {ASSETS_TREE} from '../../assets';

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
  const gotoMixEditor = () => {
    navigation.navigate(MIX_EDITOR);
  };
  return (
    <BackgroundWithImage image={mix.fullImg}>
      <TransparentStatusBar />
      <ContainerWithoutStatusBar>
        <Title text={route.params.soundName} />
        <View style={styles.container}>
          <View style={styles.timerContainer}>
            {!timer.disabled && <Timer timer={timer} />}
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('ModalTimer');
              }}>
              <Text style={styles.timerText}>Таймер</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.pausePlayBtnContainer}>
            <View style={styles.soundsIconsContinaer}>
              {mix.sounds.map((sound, index) => {
                if (index > 1) {
                  return;
                }
                return (
                  <View key={sound.id} style={styles.soundIconContainer}>
                    <CurrentMixScreenSoundIcon
                      icon={sound.icon}
                      text={Math.floor(sound.volume * 100) + '%'}
                      onPress={gotoMixEditor}
                    />
                  </View>
                );
              })}
              <View key={'change'} style={styles.soundIconContainer}>
                <CurrentMixScreenSoundIcon
                  icon={ASSETS_TREE.icon.launchpad}
                  text={'Изменить'}
                  topRightText={
                    mix.sounds.length > 2 ? mix.sounds.length + '' : undefined
                  }
                  onPress={gotoMixEditor}
                />
              </View>
            </View>
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
  timerText: {
    color: 'white',
    fontSize: 15,
    paddingTop: 30,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  soundsIconsContinaer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  soundIconContainer: {
    margin: 10,
  },
});
