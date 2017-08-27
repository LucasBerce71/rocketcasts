import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import Text from 'components/Text';
import PodcastItem from 'scenes/home/components/PodcastItem';

import styles from './styles';

class PodcastList extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Podcasts',
  };

  state = {
    podcasts: [
      {
        id: 0,
        title: 'PodNative',
        thumbnail: 'https://www.novoda.com/blog/content/images/2016/06/reactive-nativingitup-png-800x600_q96.png',
        description: '106 episódios',
      },
      {
        id: 1,
        title: 'GrokPodcast',
        thumbnail: 'https://www.grokpodcast.com/images/2015/06/vitrine-138.jpg',
        description: '95 episódios',
      },
      {
        id: 2,
        title: 'SwiftCast',
        thumbnail: 'https://www.grokpodcast.com/images/2015/02/vitrine-128.jpg',
        description: '13 episódios',
      },
    ],
  };

  render() {
    return (
      <View style={[styles.section, styles.listSection]}>
        <Text style={styles.sectionTitle}>
          {this.props.title.toUpperCase()}
        </Text>

        <ScrollView
          style={styles.list}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          { this.state.podcasts.map((podcast, index) => (
            <PodcastItem
              key={podcast.id}
              style={[
                styles.listItem,
                (index === 0) ? styles['listItem-first'] : {},
                (index === (this.state.podcasts.length - 1)) ? styles['listItem-last'] : {},
              ]}
              podcast={podcast}
            />
          )) }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (() => ({

}));

export default connect(mapStateToProps)(PodcastList);
