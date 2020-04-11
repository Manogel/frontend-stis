import { put, call } from 'redux-saga/effects';

import api, { setToken } from '~/services/api';
import history from '~/services/history';

import AuthActions from '../ducks/auth';

export function* handleLogin({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });
    const { token } = response.data;

    setToken(token);
    yield put(AuthActions.handleLoginSuccess(token));
    history.push('/dashboard');
  } catch (err) {
    yield put(AuthActions.handleAuthFailure(true));
  }
}

export function* handleLogout() {
  try {
    yield put(AuthActions.handleLoginSuccess(null));
    history.push('/');
  } catch (err) {
    yield put(AuthActions.handleAuthFailure(true));
  }
}
