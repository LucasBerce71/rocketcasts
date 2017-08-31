import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  pendingRequest: null,
  pendingSuccess: ['data'],
  pendingFailure: null,
  pendingRefresh: null,
});

export const PendingEpisodesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
  refreshing: false,
});

/* Reducers */

export const request = state =>
  state.merge({ loading: true });

export const success = (state, action) =>
  state.merge({ loading: false, refreshing: false, error: null, data: action.data });

export const failure = state =>
  state.merge({ loading: false, error: true, data: [] });

export const refresh = state =>
  state.merge({ refreshing: true, error: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PENDING_REQUEST]: request,
  [Types.PENDING_SUCCESS]: success,
  [Types.PENDING_FAILURE]: failure,
  [Types.PENDING_REFRESH]: refresh,
});
