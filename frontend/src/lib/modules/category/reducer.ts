import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import { productCategoryInitAsync } from './actions';
import { CategoryAction, CategoryState } from './types';

const initState: CategoryState = {
  productCategory: asyncState.init(),
};

const category = createReducer<CategoryState, CategoryAction>(initState, {
  ...createAsyncReducer(productCategoryInitAsync, 'productCategory'),
});

export default category;
