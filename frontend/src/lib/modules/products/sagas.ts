import {
  reqProducts,
  reqProductsCategorySelect,
  reqProductSubCategorySearch,
} from 'lib/api/products';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import { takeLatest } from '@redux-saga/core/effects';
import {
  productsCategorySelectAsync,
  productsInitAsync,
  productsSubCategorySearchAsync,
} from './actions';

const productsInitSaga = createAsyncSaga(productsInitAsync, reqProducts);

const productsCategorySelectSaga = createAsyncSaga(
  productsCategorySelectAsync,
  reqProductsCategorySelect,
);

const productsSubCategorySearchSaga = createAsyncSaga(
  productsSubCategorySearchAsync,
  reqProductSubCategorySearch,
);

export function* productsSaga() {
  yield takeLatest(productsInitAsync.request, productsInitSaga);
  yield takeLatest(
    productsCategorySelectAsync.request,
    productsCategorySelectSaga,
  );
  yield takeLatest(
    productsSubCategorySearchAsync.request,
    productsSubCategorySearchSaga,
  );
}
