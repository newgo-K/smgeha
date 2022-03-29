import { CATEGORY } from 'lib/common/commonLib';
import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import {
  productCategoryInitAsync,
  productSubCategorySelectAsync,
  PRODUCT_CATEGORY_CODE,
} from './actions';
import { CategoryAction, CategoryState } from './types';

const initState: CategoryState = {
  productCategoryCode: CATEGORY.INTRODUCE + 1,
  productCategory: asyncState.init(),
  productSubCategory: asyncState.init(),
};

const category = createReducer<CategoryState, CategoryAction>(initState, {
  [PRODUCT_CATEGORY_CODE]: (state, { payload: productCategoryCode }) => ({
    ...(state as any),
    productCategoryCode,
  }),
  ...createAsyncReducer(productCategoryInitAsync, 'productCategory'),
  ...createAsyncReducer(productSubCategorySelectAsync, 'productSubCategory'),
});

export default category;
