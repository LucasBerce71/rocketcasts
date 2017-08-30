import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  recommendedRequest: null,
  recommendedSuccess: ['data'],
  recommendedFailure: null,
});

export const RecommendedPodcastsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

/* Reducers */

export const request = state =>
  state.merge({ loading: true });

export const success = (state, action) =>
  state.merge({ loading: false, error: null, data: action.data });

export const failure = state =>
  state.merge({ loading: false, error: true, data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RECOMMENDED_REQUEST]: request,
  [Types.RECOMMENDED_SUCCESS]: success,
  [Types.RECOMMENDED_FAILURE]: failure,
});
