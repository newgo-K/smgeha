import { takeLatest } from '@redux-saga/core/effects';
import { reqLogin, reqLoginCheck } from 'lib/api/auth';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import { loginAsync, loginCheckAsync } from './actions';

const loginSaga = createAsyncSaga(loginAsync, reqLogin);
const loginCheckSaga = createAsyncSaga(loginCheckAsync, reqLoginCheck);

function loginCheckFailure() {
  debugger;
  try {
    localStorage.removeItem('user');
  } catch (e: any) {
    console.log('localStorage is not working');
  }
}

export function* authSaga() {
  yield takeLatest(loginAsync.request, loginSaga);
  yield takeLatest(loginCheckAsync.request, loginCheckSaga);
  yield takeLatest(loginCheckAsync.failure, loginCheckFailure);
}
