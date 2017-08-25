import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './navigation';
import createStore from './store';

const store = createStore();

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
