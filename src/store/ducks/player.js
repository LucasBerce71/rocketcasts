import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  changeSong: ['song'],
});

export const PendingEpisodesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  current: null,
});

/* Reducers */

export const changeSong = (state, action) =>
  state.merge({ current: action.song });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGE_SONG]: changeSong,
});
