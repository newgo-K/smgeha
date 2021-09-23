import { reqProducts } from 'lib/api/product';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import { productsAsync } from './actions';
import { takeEvery } from '@redux-saga/core/effects';

const productsSaga = createAsyncSaga(productsAsync, reqProducts);

export function* mainSaga() {
  yield takeEvery(productsAsync.request, productsSaga);
}
