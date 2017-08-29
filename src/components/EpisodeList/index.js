import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import Text from 'components/Text';
import EpisodeItem from 'components/EpisodeItem';

import styles from './styles';

export default class EpisodeList extends Component {
  static propTypes = {
    title: PropTypes.string,
    episodes: PropTypes.arrayOf(
      EpisodeItem.propTypes.episode,
    ),
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    title: 'Episódios',
    episodes: [],
  };

  renderListView() {
    return (
      <View>
        { this.props.episodes.map((episode, index) => (
          <EpisodeItem
            key={episode.id}
            style={[
              styles.listItem,
              (index === 0) ? styles['listItem-first'] : {},
              (index === (this.props.episodes.length - 1)) ? styles['listItem-last'] : {},
            ]}
            episode={episode}
          />
        )) }
      </View>
    );
  }

  render() {
    return (
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.listSectionTitle]}>
          {this.props.title}
        </Text>

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderListView() }
      </View>
    );
  }
}
