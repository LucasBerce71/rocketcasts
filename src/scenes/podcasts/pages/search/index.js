/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ScrollView, TextInput } from 'react-native';
import Header from 'components/Header';

import styles from './styles';

class Search extends Component {
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
