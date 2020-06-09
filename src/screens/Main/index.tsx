import React, {FunctionComponent, useState} from 'react';
import {TabView} from 'react-native-tab-view';
import {connect} from 'react-redux';
import {ICON_COMPASS, ICON_HOME, ICON_SETTINGS} from 'src/assets';
import {MainTabBar} from 'src/components/MainTabBar';
import {MainNavigationProp} from 'src/router';
import {MainMiniPlayer} from '../../components/MainMiniPlayer';
import {RootState, TypeOfConnect} from '../../store';
import {DiscoveriesTab} from './DiscoveriesTab';
import {SettingsTab} from './SettingsTab';
import {SoundsTab} from './SoundsTab';
import {
  playCurrentMixAction,
  resumeCurrentMixAction,
  pauseCurrentMixAction,
  stopCurrentMixAction,
} from '../../store/sound-manager/types';

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
      stopMusic: () => dispatch(stopCurrentMixAction()),
    };
  },
);

type Props = {
  navigation: MainNavigationProp;
} & TypeOfConnect<typeof storeEnhancer>;

const tabs = [
  {
    id: 'sounds',
    title: 'Звуки',
    tabbarIcon: ICON_HOME,
  },
  {
    id: 'discoveries',
    title: 'Открытия',
    tabbarIcon: ICON_COMPASS,
  },
  {
    id: 'settings',
    title: 'Настройки',
    tabbarIcon: ICON_SETTINGS,
  },
] as const;

type TabIds = typeof tabs[number]['id'];

interface TabBarState {
  index: number;
  routes: {
    key: TabIds;
    title: string;
  }[];
}

let Main: FunctionComponent<Props> = ({
  navigation,
  isPlaying,
  mix,
  timer,
  pauseMusic,
  resumeMusic,
  stopMusic,
}) => {
  //---
  // Tab bar state
  //---
  const [state, setState] = useState<TabBarState>({
    index: 0,
    routes: tabs.map((tab) => {
      return {key: tab.id, title: tab.title};
    }),
  });
  const _handleIndexChange = (index: number) => goto(index);
  function goto(index: number) {
    setState({...state, index});
  }

  //---
  // TabView tabs renderer
  //---
  function playSound(soundName: string) {
    navigation.navigate('SoundWithTimer', {soundName});
  }
  const renderScene = ({route}: {route: typeof state.routes[0]}) => {
    switch (route.key) {
      case 'sounds':
        return <SoundsTab onTopButtonPress={playSound} />;
      case 'discoveries':
        return <DiscoveriesTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return null;
    }
  };

  //---
  // Render Main screen
  //---
  return (
    <>
      <TabView
        navigationState={state}
        renderScene={renderScene}
        tabBarPosition="bottom"
        renderTabBar={() => null}
        onIndexChange={_handleIndexChange}
        swipeEnabled={false}
        lazy={false}
      />
      {mix.sounds.length >= 1 && (
        <MainMiniPlayer
          title={mix.title}
          icon={mix.previewImg}
          timer={timer}
          plaingStatus={isPlaying ? 'play' : 'pause'}
          onPause={pauseMusic}
          onPlay={resumeMusic}
          onCancel={stopMusic}
          pressOnIconTitleOrTimer={() =>
            navigation.navigate('SoundWithTimer', {soundName: mix.title})
          }
        />
      )}
      <MainTabBar
        buttons={tabs.map((tab) => {
          return {title: tab.title, icon: tab.tabbarIcon};
        })}
        current={state.index}
        onPress={(i) => goto(i)}
      />
    </>
  );
};

Main = storeEnhancer(Main);

export {Main};
