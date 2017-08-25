import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import PodcastList from 'scenes/podcasts/components/PodcastList';

import styles from './styles';

class List extends Component {
  static navigationOptions = {
    title: 'LISTA',
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <PodcastList title="Podcasts recentes" />
        <PodcastList title="RocketCasts" />
        <PodcastList title="Outro Tipo de podcast" />
      </ScrollView>
    );
  }
}

export default List;
