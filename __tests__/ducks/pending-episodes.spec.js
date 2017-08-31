import ActionCreators, { reducer, INITIAL_STATE } from 'store/ducks/pending-episodes';

test('request', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.pendingRequest());

  expect(state).toMatchSnapshot();
});

test('success', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.pendingSuccess(['result']));

  expect(state).toMatchSnapshot();
});

test('failure', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.pendingFailure());

  expect(state).toMatchSnapshot();
});

test('refresh', () => {
  const state = reducer(INITIAL_STATE, ActionCreators.pendingRefresh());

  expect(state).toMatchSnapshot();
});
