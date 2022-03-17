import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeLatest } from '@redux-saga/core/effects';
import { productWriteCategoryAsync, productWriteUploadAsync } from './actions';
import { reqCategory, reqWrite } from 'lib/api/write';

const categorySaga = createAsyncSaga(productWriteCategoryAsync, reqCategory);
const uploadSaga = createAsyncSaga(productWriteUploadAsync, reqWrite);

export function* writeSaga() {
  yield takeLatest(productWriteCategoryAsync.request, categorySaga);
  yield takeLatest(productWriteUploadAsync.request, uploadSaga);
}
