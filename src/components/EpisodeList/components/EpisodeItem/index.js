import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class PodcastItem extends Component {
  static propTypes = {
    episode: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }).isRequired,
    style: View.propTypes.style,
  };

  static defaultProps = {
    episode: {},
    style: {},
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          style={styles.image}
          source={{ uri: this.props.episode.thumbnail }}
        />
        <View style={styles.episodeInfo}>
          <Text
            style={styles.title}
            numberOfLines={2}
          >
            {this.props.episode.title}
          </Text>

          <Text style={styles.description}>
            {this.props.episode.time}
          </Text>
        </View>
        <View style={styles.moreButton}>
          <Icon name="ios-more" size={18} color="#999" />
        </View>
      </View>
    );
  }
}
