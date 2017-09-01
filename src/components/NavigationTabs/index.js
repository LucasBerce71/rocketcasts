/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Persentational */

import { View } from 'react-native';
import TabItem from './components/TabItem';

import styles from './styles';

const tabInfo = [
  { index: 0, title: 'Em alta', icon: 'chart' },
  { index: 1, title: 'Pendentes', icon: 'archive' },
  { index: 2, title: 'Buscar', icon: 'search' },
  { index: 3, title: 'Meu perfil', icon: 'user' },
];

const NavigationTabs = ({ navigationState, jumpToIndex }) => (
  <View style={styles.tabBar}>
    { tabInfo.map(tab => (
      <TabItem
        key={tab.index}
        title={tab.title}
        icon={tab.icon}
        active={(tab.index === navigationState.index)}
        onPress={() => jumpToIndex(tab.index)}
      />
    )) }
  </View>
);

NavigationTabs.propTypes = {
  navigationState: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  jumpToIndex: PropTypes.func.isRequired,
};

export default NavigationTabs;
