/* Core */
import React from 'react';

/* Persentational */
import { View, TouchableOpacity } from 'react-native';
import Text from 'components/Text';
import Icon from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Player = () => (
  <View style={styles.player}>
    <View style={styles.progress} />
    <View style={styles.content}>
      <TouchableOpacity>
        <Icon name="controller-play" size={24} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.current}>
        <Text style={styles.title}>Swift para desenvolvimento IOS</Text>
        <Text style={styles.description}>SwiftCast - 25 de agosto de 2017</Text>
      </View>

      <TouchableOpacity>
        <IconIonicons name="ios-more" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  </View>
);

export default Player;
