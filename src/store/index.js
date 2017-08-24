import { combineReducers } from 'redux';
import navReducer from 'navigation/reducer';
import configureStore from './configureStore';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
  });

  return configureStore(rootReducer);
};
