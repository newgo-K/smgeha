import { reqProducts, reqProductsMainMenuSelect } from 'lib/api/product';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeEvery } from '@redux-saga/core/effects';
import { productsMainMenuSelectAsync, productsInitAsync } from './actions';

const productsInitSaga = createAsyncSaga(productsInitAsync, reqProducts);
const productsMainMenuSelectSaga = createAsyncSaga(
  productsMainMenuSelectAsync,
  reqProductsMainMenuSelect,
);

export function* productsSaga() {
  yield takeEvery(productsInitAsync.request, productsInitSaga);
  yield takeEvery(
    productsMainMenuSelectAsync.request,
    productsMainMenuSelectSaga,
  );
}
