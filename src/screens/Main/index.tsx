import React, {FunctionComponent, useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';

import {MainNavigationProp} from 'src/router';
import {SoundsTab} from './SoundsTab';
import {DiscoveriesTab} from './DiscoveriesTab';
import {SettingsTab} from './SettingsTab';
import {View, Text, StyleSheet} from 'react-native';
import {MainTabBar} from 'src/components/MainTabBar';
import {ICON_HOME, ICON_COMPASS, ICON_SETTINGS} from 'src/assets';

type Props = {
  navigation: MainNavigationProp;
};

const buttons = [
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

export const Main: FunctionComponent<Props> = ({}) => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      {key: 'sounds', title: 'Звуки'},
      {key: 'discoveries', title: 'Открытия'},
      {key: 'settings', title: 'Настройки'},
    ],
  });
  const _handleIndexChange = (index: number) => setState({...state, index});
  const _renderScene = SceneMap({
    sounds: SoundsTab,
    discoveries: DiscoveriesTab,
    settings: SettingsTab,
  });
  return (
    <>
      <TabView
        navigationState={state}
        renderScene={_renderScene}
        tabBarPosition="bottom"
        renderTabBar={() => null}
        onIndexChange={_handleIndexChange}
        // swipeEnabled={false}
      />
      <MainTabBar buttons={buttons} />
    </>
  );
};
