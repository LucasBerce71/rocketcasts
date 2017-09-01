/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ScrollView } from 'react-native';
import Header from 'components/Header';

import styles from './styles';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Meu perfil" />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >

        </ScrollView>
      </View>
    );
  }
}

export default Profile;
