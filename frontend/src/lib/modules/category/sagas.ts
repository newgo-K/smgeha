import { reqProductCategory, reqProductSubCategory } from 'lib/api/category';
import { takeLatest } from '@redux-saga/core/effects';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import {
  productCategoryInitAsync,
  productSubCategorySelectAsync,
} from './actions';

const productCategoryInitSaga = createAsyncSaga(
  productCategoryInitAsync,
  reqProductCategory,
);

const productSubCategorySelectSaga = createAsyncSaga(
  productSubCategorySelectAsync,
  reqProductSubCategory,
);

export function* categorySaga() {
  yield takeLatest(productCategoryInitAsync.request, productCategoryInitSaga);
  yield takeLatest(
    productSubCategorySelectAsync.request,
    productSubCategorySelectSaga,
  );
}
