import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import styles from './styles';

export default class PodcastItem extends Component {
  static propTypes = {
    podcast: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
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
          numberOfLines={1}
        >
          {this.props.podcast.title}
        </Text>

        <Text style={styles.description}>
          {this.props.podcast.description}
        </Text>
      </View>
    );
  }
}
