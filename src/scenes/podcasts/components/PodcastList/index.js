import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';

import PodcastItem from 'scenes/podcasts/components/PodcastItem';

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
        title: 'Clojures: Quando utilizá-las',
        thumbnail: 'https://www.novoda.com/blog/content/images/2016/06/reactive-nativingitup-png-800x600_q96.png',
      },
      {
        id: 1,
        title: 'React Native: Mobile com Javascript?',
        thumbnail: 'https://www.grokpodcast.com/images/2015/06/vitrine-138.jpg',
      },
      {
        id: 2,
        title: 'Swift: Desenvolvimento iOS',
        thumbnail: 'https://www.grokpodcast.com/images/2015/02/vitrine-128.jpg',
      },
    ],
  };

  render() {
    return (
      <View style={[styles.section, styles.listSection]}>
        <Text style={[styles.sectionTitle, styles.listSectionTitle]}>
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
