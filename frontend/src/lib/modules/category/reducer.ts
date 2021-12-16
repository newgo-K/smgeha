import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import {
  productCategoryInitAsync,
  productSubCategorySelectAsync,
} from './actions';
import { CategoryAction, CategoryState } from './types';

const initState: CategoryState = {
  productCategory: asyncState.init(),
  productSubCategory: asyncState.init(),
};

const category = createReducer<CategoryState, CategoryAction>(initState, {
  ...createAsyncReducer(productCategoryInitAsync, 'productCategory'),
  ...createAsyncReducer(productSubCategorySelectAsync, 'productSubCategory'),
});

export default category;
