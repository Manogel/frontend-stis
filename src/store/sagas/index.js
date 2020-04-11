import { all, takeLatest } from 'redux-saga/effects';

import { setToken } from '~/services/api';

import { AuthTypes } from '../ducks/auth';
import { handleLogin, handleLogout } from './auth';

function setInitialToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    setToken(token);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest('persist/REHYDRATE', setInitialToken),
    takeLatest(AuthTypes.HANDLE_LOGIN_REQUEST, handleLogin),
    takeLatest(AuthTypes.HANDLE_LOGOUT, handleLogout),
  ]);
}
