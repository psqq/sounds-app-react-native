import React, {FunctionComponent, useState} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';

import {MainNavigationProp} from 'src/router';
import {SoundsTab} from './SoundsTab';
import {DiscoveriesTab} from './DiscoveriesTab';
import {SettingsTab} from './SettingsTab';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  navigation: MainNavigationProp;
};

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
      <View style={styles.tabBar}>
        <Text>Tab bar</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    opacity: 0.5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
