/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ScrollView, ActivityIndicator } from 'react-native';
import Text from 'components/Text';
import PodcastItem from 'scenes/trending/components/PodcastItem';

import styles from './styles';

export default class PodcastList extends Component {
  static propTypes = {
    title: PropTypes.string,
    podcasts: PropTypes.arrayOf(
      PodcastItem.propTypes.podcast,
    ),
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    title: 'Podcasts',
    podcasts: [],
  };

  renderListView() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        { this.props.podcasts.map((podcast, index) => (
          <PodcastItem
            key={podcast.id}
            style={[
              styles.listItem,
              (index === 0) ? styles['listItem-first'] : {},
              (index === (this.props.podcasts.length - 1)) ? styles['listItem-last'] : {},
            ]}
            podcast={podcast}
          />
        )) }
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={[styles.section, styles.listSection]}>
        <Text style={styles.sectionTitle}>
          {this.props.title}
        </Text>

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderListView() }
      </View>
    );
  }
}
