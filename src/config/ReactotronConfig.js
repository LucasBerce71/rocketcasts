import Reactotron from 'reactotron-react-native';
import tronsauce from 'reactotron-apisauce';

Reactotron
  .configure()
  .use(tronsauce())
  .useReactNative()
  .connect();
