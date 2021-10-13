import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeEvery } from '@redux-saga/core/effects';
import { productWriteUploadAsync } from './actions';
import { reqWrite } from 'lib/api/write';

const uploadSaga = createAsyncSaga(productWriteUploadAsync, reqWrite);

export function* writeSaga() {
  yield takeEvery(productWriteUploadAsync.request, uploadSaga);
}
