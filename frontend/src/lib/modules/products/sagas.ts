import {
  reqProducts,
  reqProductsMainMenuSelect,
  reqProductSubCategorySearch,
} from 'lib/api/products';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeLatest } from '@redux-saga/core/effects';
import {
  productsMainMenuSelectAsync,
  productsInitAsync,
  productsSubCategorySearchAsync,
} from './actions';

const productsInitSaga = createAsyncSaga(productsInitAsync, reqProducts);

const productsMainMenuSelectSaga = createAsyncSaga(
  productsMainMenuSelectAsync,
  reqProductsMainMenuSelect,
);

const productsSubCategorySearchSaga = createAsyncSaga(
  productsSubCategorySearchAsync,
  reqProductSubCategorySearch,
);

export function* productsSaga() {
  yield takeLatest(productsInitAsync.request, productsInitSaga);
  yield takeLatest(
    productsMainMenuSelectAsync.request,
    productsMainMenuSelectSaga,
  );
  yield takeLatest(
    productsSubCategorySearchAsync.request,
    productsSubCategorySearchSaga,
  );
}
