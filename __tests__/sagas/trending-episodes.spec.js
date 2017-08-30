import Api from 'services/Api';
import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import ActionCreators, { TrendingEpisodesTypes, INITIAL_STATE } from 'store/ducks/trending-episodes';
import { getTrendingEpisodes } from 'store/sagas/trending-episodes';

const fixtureApi = require('./fixtures/trending-episodes.json');

describe('trending Podcasts SAGA', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester(INITIAL_STATE);
    apiMock = new MockAdapter(Api.axiosInstance);
  });

  it('should success', async () => {
    apiMock.onGet('/episodes').reply(config => [200, fixtureApi[config.url]]);

    sagaTester.start(getTrendingEpisodes);
    sagaTester.dispatch(ActionCreators.trendingRequest());

    await sagaTester.waitFor(TrendingEpisodesTypes.TRENDING_SUCCESS);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(ActionCreators.trendingSuccess(fixtureApi['/episodes']));
  });

  it('should fail if request fails', async () => {
    apiMock.onGet('/episodes').reply(400);

    sagaTester.start(getTrendingEpisodes);
    sagaTester.dispatch(ActionCreators.trendingRequest());

    await sagaTester.waitFor(TrendingEpisodesTypes.TRENDING_FAILURE);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(ActionCreators.trendingFailure());
  });
});
