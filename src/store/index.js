import { combineReducers } from 'redux';
import navReducer from 'navigation/reducer';
import configureStore from './configureStore';
import rootSaga from './sagas';

import { reducer as recommendedPodcasts } from './ducks/recommended-podcasts';
import { reducer as trendingEpisodes } from './ducks/trending-episodes';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    recommendedPodcasts,
    trendingEpisodes,
  });

  return configureStore(rootReducer, rootSaga);
};
