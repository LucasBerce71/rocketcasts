import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: React.PropTypes.element,
  };

  static defaultProps = {
    title: null,
    children: null,
  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.title && <Text style={styles.title}>{this.props.title.toUpperCase()}</Text> }
        { this.props.children }
      </View>
    );
  }
}
