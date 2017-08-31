import Api from 'services/Api';
import { call, put } from 'redux-saga/effects';
import ActionCreators from 'store/ducks/pending-episodes';

export function* getPendingEpisodes() {
  const response = yield call(Api.get, '/episodes');

  if (response.ok) {
    yield put(ActionCreators.pendingSuccess(response.data));
  } else {
    yield put(ActionCreators.pendingFailure());
  }
}
