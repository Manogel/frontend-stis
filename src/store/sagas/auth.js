import { put } from 'redux-saga/effects';

import history from '~/services/history';

import AuthActions from '../ducks/auth';

export function* handleLogin({ payload }) {
  try {
    const { email, password } = payload;

    if (email === 'admin@admin.com' && password === 'admin') {
      yield put(AuthActions.handleLoginSuccess('token'));
      history.push('/dashboard');
      return;
    }

    yield put(AuthActions.handleAuthFailure(true));
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
