import 'config/ReactotronConfig';
import 'config/StatusBarConfig';

import DebugConfig from 'config/DebugConfig';

import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './navigation';
import createStore from './store';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App;
