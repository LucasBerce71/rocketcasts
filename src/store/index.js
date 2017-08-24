import { combineReducers } from 'redux';
import configureStore from './configureStore';
import { user } from './reducers';

export default () => {
  const rootReducer = combineReducers({
    user,
  });

  return configureStore(rootReducer);
};
