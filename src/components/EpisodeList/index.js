import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import EpisodeItem from 'components/EpisodeItem';

import styles from './styles';

export default class EpisodeList extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Episódios',
  };

  state = {
    episodes: [
      {
        id: 0,
        title: 'Por que o React Native está dominando o mercado mobile?',
        thumbnail: 'https://www.novoda.com/blog/content/images/2016/06/reactive-nativingitup-png-800x600_q96.png',
        time: '6 min',
      },
      {
        id: 1,
        title: 'Conheça o GrokPodcast',
        thumbnail: 'https://www.grokpodcast.com/images/2015/06/vitrine-138.jpg',
        time: '3 min',
      },
      {
        id: 2,
        title: 'Swift para desenvolvimento iOS',
        thumbnail: 'https://www.grokpodcast.com/images/2015/02/vitrine-128.jpg',
        time: '7 min',
      },
    ],
  };

  render() {
    return (
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.listSectionTitle]}>
          {this.props.title.toUpperCase()}
        </Text>

        <View style={styles.list}>
          { this.state.episodes.map((episode, index) => (
            <EpisodeItem
              key={episode.id}
              style={[
                styles.listItem,
                (index === 0) ? styles['listItem-first'] : {},
                (index === (this.state.episodes.length - 1)) ? styles['listItem-last'] : {},
              ]}
              episode={episode}
            />
          )) }
        </View>
      </View>
    );
  }
}
