import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import Header from 'components/Header';

import styles from './styles';

class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: 'Meu perfil',
    tabBarIcon: ({ tintColor }) => (
      <Icon name={'user'} size={32} color={tintColor} />
    ),
  };

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
