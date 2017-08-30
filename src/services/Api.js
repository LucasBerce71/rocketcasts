import Config from 'react-native-config';
import { create } from 'apisauce';

const api = create({
  baseURL: Config.API_URL || 'http://localhost:3000',
});

export default api;
