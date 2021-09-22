import { takeEvery } from '@redux-saga/core/effects';
import {
  reqChangePassword,
  reqCheckCode,
  reqLogin,
  reqPinCode,
  reqReg,
} from 'lib/api/auth';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import {
  changePasswordAsync,
  checkCodeAsync,
  loginAsync,
  pinCodeAsync,
  registerAsync,
} from './actions';

const loginSaga = createAsyncSaga(loginAsync, reqLogin);
const registerSaga = createAsyncSaga(registerAsync, reqReg);
const pinCodeSaga = createAsyncSaga(pinCodeAsync, reqPinCode);
const checkCodeSaga = createAsyncSaga(checkCodeAsync, reqCheckCode);
const changePasswordSaga = createAsyncSaga(
  changePasswordAsync,
  reqChangePassword,
);

export function* authSaga() {
  yield takeEvery(loginAsync.request, loginSaga);
  yield takeEvery(registerAsync.request, registerSaga);
  yield takeEvery(pinCodeAsync.request, pinCodeSaga);
  yield takeEvery(checkCodeAsync.request, checkCodeSaga);
  yield takeEvery(changePasswordAsync.request, changePasswordSaga);
}
