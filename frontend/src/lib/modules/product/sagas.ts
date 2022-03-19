import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeLatest } from '@redux-saga/core/effects';
import { productDelectAsync, productSelectAsync } from './actions';
import { reqProductDelete, reqProductSelect } from 'lib/api/product';

const productSelectSaga = createAsyncSaga(productSelectAsync, reqProductSelect);
const productDeleteSaga = createAsyncSaga(productDelectAsync, reqProductDelete);

export function* productSaga() {
  yield takeLatest(productSelectAsync.request, productSelectSaga);
  yield takeLatest(productDelectAsync.request, productDeleteSaga);
}
