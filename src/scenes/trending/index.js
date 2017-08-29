/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ScrollView } from 'react-native';
import Header from 'components/Header';
import EpisodeList from 'components/EpisodeList';
import PodcastList from 'scenes/trending/components/PodcastList';
import Icon from 'react-native-vector-icons/EvilIcons';

/* Redux */
import { connect } from 'react-redux';
import TrendingEpisodesActions from 'store/ducks/trending-episodes';
import RecommendedPodcastsActions from 'store/ducks/recommended-podcasts';

import styles from './styles';

export class Trending extends Component {
  static navigationOptions = {
    tabBarLabel: 'Em alta',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'chart'} size={32} color={tintColor} />
    ),
  };

  static propTypes = {
    recommendedRequest: PropTypes.func.isRequired,
    recommendedPodcasts: PropTypes.shape({
      data: PodcastList.propTypes.podcasts,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }),
    trendingRequest: PropTypes.func.isRequired,
    trendingEpisodes: PropTypes.shape({
      data: EpisodeList.propTypes.episodes,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }),
  };

  static defaultProps = {
    recommendedPodcasts: [],
    trendingEpisodes: [],
  };

  componentDidMount() {
    this.props.recommendedRequest();
    this.props.trendingRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Em alta" />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <EpisodeList
            title="Episódios em alta"
            loading={this.props.trendingEpisodes.loading}
            episodes={this.props.trendingEpisodes.data}
          />
          <PodcastList
            title="Recomendados"
            loading={this.props.recommendedPodcasts.loading}
            podcasts={this.props.recommendedPodcasts.data}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  recommendedPodcasts: state.recommendedPodcasts,
  trendingEpisodes: state.trendingEpisodes,
});

const mapDispatchToProps = dispatch => ({
  recommendedRequest: () => dispatch(RecommendedPodcastsActions.recommendedRequest()),
  trendingRequest: () => dispatch(TrendingEpisodesActions.trendingRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
