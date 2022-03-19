import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeLatest } from '@redux-saga/core/effects';
import {
  productWriteCategoryAsync,
  productWriteModifyAsync,
  productWriteSelectAsync,
  productWriteUploadAsync,
} from './actions';
import {
  reqCategory,
  reqModify,
  reqWrite,
  reqWriteSelect,
} from 'lib/api/write';

const categorySaga = createAsyncSaga(productWriteCategoryAsync, reqCategory);
const selectSaga = createAsyncSaga(productWriteSelectAsync, reqWriteSelect);
const uploadSaga = createAsyncSaga(productWriteUploadAsync, reqWrite);
const modifySaga = createAsyncSaga(productWriteModifyAsync, reqModify);

export function* writeSaga() {
  yield takeLatest(productWriteCategoryAsync.request, categorySaga);
  yield takeLatest(productWriteSelectAsync.request, selectSaga);
  yield takeLatest(productWriteUploadAsync.request, uploadSaga);
  yield takeLatest(productWriteModifyAsync.request, modifySaga);
}
