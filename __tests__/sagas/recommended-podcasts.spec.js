import Api from 'services/Api';
import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import ActionCreators, { RecommendedPodcastsTypes, INITIAL_STATE } from 'store/ducks/recommended-podcasts';
import { getRecommendedPodcasts } from 'store/sagas/recommended-podcasts';

const fixtureApi = require('./fixtures/recommended-podcasts.json');

describe('recommended Podcasts SAGA', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester(INITIAL_STATE);
    apiMock = new MockAdapter(Api.axiosInstance);
  });

  it('should success', async () => {
    apiMock.onGet('/podcasts').reply(config => [200, fixtureApi[config.url]]);

    sagaTester.start(getRecommendedPodcasts);
    sagaTester.dispatch(ActionCreators.recommendedRequest());

    await sagaTester.waitFor(RecommendedPodcastsTypes.RECOMMENDED_SUCCESS);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(ActionCreators.recommendedSuccess(fixtureApi['/podcasts']));
  });

  it('should fail if request fails', async () => {
    apiMock.onGet('/podcasts').reply(400);

    sagaTester.start(getRecommendedPodcasts);
    sagaTester.dispatch(ActionCreators.recommendedRequest());

    await sagaTester.waitFor(RecommendedPodcastsTypes.RECOMMENDED_FAILURE);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(ActionCreators.recommendedFailure());
  });
});
