import Api from 'services/Api';
import SagaTester from 'redux-saga-tester';
import MockAdapter from 'axios-mock-adapter';

import ActionCreators, { PendingEpisodesTypes, INITIAL_STATE } from 'store/ducks/pending-episodes';
import { getPendingEpisodes } from 'store/sagas/pending-episodes';

const fixtureApi = require('./fixtures/pending-episodes.json');

describe('pending Podcasts SAGA', () => {
  let sagaTester = null;
  let apiMock = null;

  beforeEach(() => {
    sagaTester = new SagaTester(INITIAL_STATE);
    apiMock = new MockAdapter(Api.axiosInstance);
  });

  it('should success', async () => {
    apiMock.onGet('/episodes').reply(config => [200, fixtureApi[config.url]]);

    sagaTester.start(getPendingEpisodes);
    sagaTester.dispatch(ActionCreators.pendingRequest());

    await sagaTester.waitFor(PendingEpisodesTypes.PENDING_SUCCESS);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(ActionCreators.pendingSuccess(fixtureApi['/episodes']));
  });

  it('should fail if request fails', async () => {
    apiMock.onGet('/episodes').reply(400);

    sagaTester.start(getPendingEpisodes);
    sagaTester.dispatch(ActionCreators.pendingRequest());

    await sagaTester.waitFor(PendingEpisodesTypes.PENDING_FAILURE);

    expect(sagaTester.getLatestCalledAction())
      .toEqual(ActionCreators.pendingFailure());
  });
});
