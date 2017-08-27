import React, { Component } from 'react';
import { View, ScrollView, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Header from 'components/Header';

import styles from './styles';

class Search extends Component {
  static navigationOptions = {
    tabBarLabel: 'Buscar',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'search'} size={32} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <TextInput
            style={styles.searchInput}
            placeholder={'Buscar podcasts...'}
            placeholderTextColor={'#999'}
          />
        </Header>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
        </ScrollView>
      </View>
    );
  }
}

export default Search;
