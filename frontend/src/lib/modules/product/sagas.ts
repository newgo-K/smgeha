import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeEvery } from '@redux-saga/core/effects';
import { productSelectAsync } from './actions';
import { reqProductSelect } from 'lib/api/product';

const productSelectSaga = createAsyncSaga(productSelectAsync, reqProductSelect);

export function* productSaga() {
  yield takeEvery(productSelectAsync.request, productSelectSaga);
}
