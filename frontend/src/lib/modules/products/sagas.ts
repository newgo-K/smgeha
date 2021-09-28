import {
  reqProducts,
  reqProductsMainMenuSelect,
  reqProductsSideMenuSelect,
} from 'lib/api/product';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeEvery } from '@redux-saga/core/effects';
import {
  productsSideMenuSelectAsync,
  productsMainMenuSelectAsync,
  productsInitAsync,
} from './actions';

const productsInitSaga = createAsyncSaga(productsInitAsync, reqProducts);

const productsMainMenuSelectSaga = createAsyncSaga(
  productsMainMenuSelectAsync,
  reqProductsMainMenuSelect,
);

const productsSideMenuSelectSaga = createAsyncSaga(
  productsSideMenuSelectAsync,
  reqProductsSideMenuSelect,
);

export function* productsSaga() {
  yield takeEvery(productsInitAsync.request, productsInitSaga);
  yield takeEvery(
    productsMainMenuSelectAsync.request,
    productsMainMenuSelectSaga,
  );
  yield takeEvery(
    productsSideMenuSelectAsync.request,
    productsSideMenuSelectSaga,
  );
}
