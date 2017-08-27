import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Header from 'components/Header';

import styles from './styles';

class List extends Component {
  static navigationOptions = {
    tabBarLabel: 'Pendentes',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'archive'} size={32} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Pendentes" />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
        </ScrollView>
      </View>
    );
  }
}

export default List;
