import React, {FunctionComponent, useState} from 'react';
import {TabView} from 'react-native-tab-view';

import {MainNavigationProp} from 'src/router';
import {SoundsTab} from './SoundsTab';
import {DiscoveriesTab} from './DiscoveriesTab';
import {SettingsTab} from './SettingsTab';
import {MainTabBar} from 'src/components/MainTabBar';
import {ICON_HOME, ICON_COMPASS, ICON_SETTINGS} from 'src/assets';

type Props = {
  navigation: MainNavigationProp;
};

const tabBarButtons = [
  {
    title: 'Звуки',
    icon: ICON_HOME,
  },
  {
    title: 'Открытия',
    icon: ICON_COMPASS,
  },
  {
    title: 'Настройки',
    icon: ICON_SETTINGS,
  },
];

interface TabBarState {
  index: number;
  routes: {
    key: 'sounds' | 'discoveries' | 'settings';
    title: string;
  }[];
}

export const Main: FunctionComponent<Props> = ({navigation}) => {
  //---
  // Tab bar state
  //---
  const [state, setState] = useState<TabBarState>({
    index: 0,
    routes: [
      {key: 'sounds', title: 'Звуки'},
      {key: 'discoveries', title: 'Открытия'},
      {key: 'settings', title: 'Настройки'},
    ],
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
        return <SoundsTab onTopButtonPress={(title) => playSound(title)} />;
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
      <MainTabBar
        buttons={tabBarButtons}
        current={state.index}
        onPress={(i) => goto(i)}
      />
    </>
  );
};
