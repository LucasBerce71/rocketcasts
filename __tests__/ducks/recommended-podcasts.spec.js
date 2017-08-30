import ActionCreators, { reducer, INITIAL_STATE } from 'store/ducks/recommended-podcasts';

test('request', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.recommendedRequest());

  expect(state).toMatchSnapshot();
});

test('success', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.recommendedSuccess(['result']));

  expect(state).toMatchSnapshot();
});

test('failure', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.recommendedFailure());

  expect(state).toMatchSnapshot();
});
