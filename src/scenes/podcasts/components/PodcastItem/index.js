import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class PodcastItem extends Component {
  static propTypes = {
    podcast: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
    style: View.propTypes.style,
  };

  static defaultProps = {
    podcast: {},
    style: {},
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          style={styles.image}
          source={{ uri: this.props.podcast.thumbnail }}
        />
        <Text
          style={styles.title}
          numberOfLines={2}
        >
          {this.props.podcast.title}
        </Text>
      </View>
    );
  }
}
