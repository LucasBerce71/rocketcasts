import Api from 'services/Api';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/recommended-podcasts';

export function* getRecommendedPodcasts() {
  const response = yield call(Api.get, '/podcasts');

  if (response.ok) {
    yield put(ActionCreators.recommendedSuccess(response.data));
  } else {
    yield put(ActionCreators.recommendedFailure());
  }
}
