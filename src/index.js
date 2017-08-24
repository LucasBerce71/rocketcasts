import 'config/ReactotronConfig';

import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();

const RocketCast = () => (
  <Provider store={store}>
    <View>
      <Text>Hey</Text>
    </View>
  </Provider>
);

export default RocketCast;
