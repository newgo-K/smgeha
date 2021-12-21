import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import {
  productsInitAsync,
  productsSubCategorySearchAsync,
  productsCategorySelectAsync,
} from './actions';
import { ProductsState, ProductsAction } from './types';

const initState: ProductsState = {
  list: asyncState.init(),
};

const products = createReducer<ProductsState, ProductsAction>(initState, {
  ...createAsyncReducer(productsInitAsync, 'list'),
  ...createAsyncReducer(productsCategorySelectAsync, 'list'),
  ...createAsyncReducer(productsSubCategorySearchAsync, 'list'),
});

export default products;
