import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Header from 'components/Header';
import EpisodeList from 'components/EpisodeList';
import PodcastList from 'scenes/home/components/PodcastList';

import styles from './styles';

class List extends Component {
  static navigationOptions = {
    tabBarLabel: 'Em alta',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'chart'} size={32} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Em alta" />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <EpisodeList title="Episódios em alta" />
          <PodcastList title="Tecnologia" />
        </ScrollView>
      </View>
    );
  }
}

export default List;
