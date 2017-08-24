import Config from 'config/DebugConfig';
import { createStore, applyMiddleware, compose } from 'redux';

export default (rootReducer = null) => {
  const middleware = [];
  const enhancers = [];

  enhancers.push(applyMiddleware(...middleware));

  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));

  return store;
};
