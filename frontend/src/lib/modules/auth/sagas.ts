import { takeLatest } from '@redux-saga/core/effects';
import { reqLogin } from 'lib/api/auth';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import { loginAsync } from './actions';

const loginSaga = createAsyncSaga(loginAsync, reqLogin);

export function* authSaga() {
  yield takeLatest(loginAsync.request, loginSaga);
}
