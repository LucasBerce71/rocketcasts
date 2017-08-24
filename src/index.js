import React from 'react';
import { View, Text } from 'react-native';
import Api from './lib/Api';

import './config/ReactotronConfig';

class RocketCast extends React.Component {
  constructor(props) {
    super(props);

    Api.get('/podcasts');
  }

  render() {
    return (
      <View>
        <Text>Hey</Text>
      </View>
    );
  }
}

export default RocketCast;
