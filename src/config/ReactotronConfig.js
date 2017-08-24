import Reactotron from 'reactotron-react-native';
import tronsauce from 'reactotron-apisauce';
import Immutable from 'seamless-immutable';
import { reactotronRedux } from 'reactotron-redux';

import Config from './DebugConfig';

if (Config.useReactotron) {
  Reactotron
    .configure()
    .use(tronsauce())
    .use(reactotronRedux({ onRestore: Immutable }))
    .useReactNative()
    .connect();

  Reactotron.clear();

  console.tron = Reactotron;
}
