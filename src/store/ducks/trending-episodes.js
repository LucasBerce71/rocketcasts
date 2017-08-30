import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  trendingRequest: null,
  trendingSuccess: ['data'],
  trendingFailure: null,
});

export const TrendingEpisodesTypes = Types;
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
  [Types.TRENDING_REQUEST]: request,
  [Types.TRENDING_SUCCESS]: success,
  [Types.TRENDING_FAILURE]: failure,
});
