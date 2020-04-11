import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  handleLoginRequest: ['payload'],
  handleLoginSuccess: ['token'],
  handleAuthFailure: ['error'],
  handleLogout: [],
});

export const AuthTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: null,
  loading: false,
  token: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HANDLE_LOGIN_REQUEST]: (state) =>
    state.merge({ loading: true, error: null }),
  [Types.HANDLE_LOGOUT]: (state) => state.merge({}),
  [Types.HANDLE_LOGIN_SUCCESS]: (state, { token }) =>
    state.merge({ loading: false, error: null, token }),
  [Types.HANDLE_AUTH_FAILURE]: (state, { error }) =>
    state.merge({ loading: false, error, token: null }),
});
