/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View } from 'react-native';
import Header from 'components/Header';
import EpisodeList from 'components/EpisodeList';

/* Redux */
import { connect } from 'react-redux';
import PendingEpisodesActions from 'store/ducks/pending-episodes';

import styles from './styles';

class Pending extends Component {
  static propTypes = {
    pendingRequest: PropTypes.func.isRequired,
    pendingRefresh: PropTypes.func.isRequired,
    pendingEpisodes: PropTypes.shape({
      data: EpisodeList.propTypes.episodes,
      loading: PropTypes.bool,
      error: PropTypes.bool,
      refreshing: PropTypes.bool,
    }),
  };

  static defaultProps = {
    pendingEpisodes: [],
  };

  componentDidMount() {
    this.props.pendingRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Pendentes" />
        <EpisodeList
          style={styles.container}
          showTitle={false}
          loading={this.props.pendingEpisodes.loading}
          episodes={this.props.pendingEpisodes.data}
          emptyText="Nenhum episódio pendente"
          refreshable
          refreshing={this.props.pendingEpisodes.refreshing}
          onRefresh={this.props.pendingRefresh}
        />
      </View>
    );
  }
}


const mapStateToProps = state => ({
  pendingEpisodes: state.pendingEpisodes,
});

const mapDispatchToProps = dispatch => ({
  pendingRequest: () => dispatch(PendingEpisodesActions.pendingRequest()),
  pendingRefresh: () => dispatch(PendingEpisodesActions.pendingRefresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pending);
