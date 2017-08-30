import ActionCreators, { reducer, INITIAL_STATE } from 'store/ducks/trending-episodes';

test('request', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.trendingRequest());

  expect(state).toMatchSnapshot();
});

test('success', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.trendingSuccess(['result']));

  expect(state).toMatchSnapshot();
});

test('failure', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.trendingFailure());

  expect(state).toMatchSnapshot();
});
