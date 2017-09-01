import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ListView, ActivityIndicator, RefreshControl } from 'react-native';

import Text from 'components/Text';
import EpisodeItem from './components/EpisodeItem';

import styles from './styles';

export default class EpisodeList extends Component {
  static propTypes = {
    title: PropTypes.string,
    showTitle: PropTypes.bool,
    emptyText: PropTypes.string,
    episodes: PropTypes.arrayOf(
      EpisodeItem.propTypes.episode,
    ),
    loading: PropTypes.bool.isRequired,
    style: View.propTypes.style,
    refreshable: PropTypes.bool,
    refreshing: PropTypes.bool,
    onRefresh: PropTypes.func,
  };

  static defaultProps = {
    title: 'Episódios',
    showTitle: true,
    emptyText: 'Nenhum episódio',
    episodes: [],
    style: {},
    refreshable: false,
    refreshing: false,
    onRefresh: () => {},
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      episodes: ds.cloneWithRows(this.props.episodes),
    };
  }

  componentWillReceiveProps({ episodes }) {
    const { episodes: oldData } = this.props;

    if (episodes !== oldData) {
      const dataSource = this.state.episodes.cloneWithRows(episodes || []);
      this.setState({ episodes: dataSource });
    }
  }

  renderTitle = () => (
    <Text style={[styles.sectionTitle, styles.listSectionTitle]}>
      {this.props.title}
    </Text>
  );

  renderListView = () => (
    <ListView
      enableEmptySections
      dataSource={this.state.episodes}
      renderRow={this.renderEpisode}
      refreshControl={this.renderRefreshControl()}
    />
  );

  renderRefreshControl = () => {
    if (this.props.refreshable) {
      return (
        <RefreshControl
          refreshing={this.props.refreshing}
          onRefresh={this.props.onRefresh}
        />
      );
    }

    return null;
  };

  renderEpisode = (data, section, index) => (
    <EpisodeItem
      style={[
        styles.listItem,
        (Number.parseInt(index, 10) === 0) ? styles['listItem-first'] : {},
        (Number.parseInt(index, 10) === (this.state.episodes.getRowCount())) ? styles['listItem-last'] : {},
      ]}
      episode={data}
    />
  );

  renderEmpty = () => (
    <Text style={styles.emptyList}>{this.props.emptyText}</Text>
  );

  renderContent = () => (
    this.state.episodes.getRowCount() === 0
      ? this.renderEmpty()
      : this.renderListView()
  );

  render() {
    return (
      <View style={[styles.section, this.props.style]}>
        { this.props.showTitle && this.renderTitle() }

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderContent() }
      </View>
    );
  }
}
