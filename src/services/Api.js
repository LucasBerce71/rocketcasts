import Config from 'react-native-config';
import { create } from 'apisauce';

const api = create({
  baseURL: Config.API_URL,
});

export default api;
