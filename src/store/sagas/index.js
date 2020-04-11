import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { handleLogin, handleLogout } from './auth';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.HANDLE_LOGIN_REQUEST, handleLogin),
    takeLatest(AuthTypes.HANDLE_LOGOUT, handleLogout),
  ]);
}
