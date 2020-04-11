import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  activateAuthLayout: ['payload'],
  activateNonAuthLayout: ['payload'],
  isLarge: ['payload'],
});

export const LayoutTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  topbar: true,
  sidebar: true,
  footer: true,

  is_large_state: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ACTIVATE_AUTH_LAYOUT]: (state, { payload }) =>
    state.merge({ ...state, ...payload }),
  [Types.ACTIVATE_NON_AUTH_LAYOUT]: (state, { payload }) =>
    state.merge({ ...state, ...payload }),
  [Types.IS_LARGE]: (state, { payload }) =>
    state.merge({ ...state, is_large_state: payload }),
});
