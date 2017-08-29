import Api from 'lib/Api';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/trending-episodes';

export function* getTrendingEpisodes() {
  const response = yield call(() => Api.get('/episodes'));

  if (response.ok) {
    yield put(ActionCreators.trendingSuccess(response.data));
  } else {
    yield put(ActionCreators.trendingFailure());
  }
}
