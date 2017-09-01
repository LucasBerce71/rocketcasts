/* Core */
import React from 'react';
import { View } from 'react-native';

/* Persentational */
import Player from 'components/Player';
import NavigationTabs from 'components/NavigationTabs';

import styles from './styles';

const Footer = props => (
  <View style={styles.container}>
    <Player />
    <NavigationTabs {...props} />
  </View>
);

export default Footer;
