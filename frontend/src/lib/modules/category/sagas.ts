import { reqProductCategory } from 'lib/api/category';
import { takeEvery } from '@redux-saga/core/effects';
import { createAsyncSaga } from 'lib/common/sagaUtils';
import { productCategoryInitAsync } from './actions';

const productCategoryInitSaga = createAsyncSaga(
  productCategoryInitAsync,
  reqProductCategory,
);

export function* categorySaga() {
  yield takeEvery(productCategoryInitAsync.request, productCategoryInitSaga);
}
