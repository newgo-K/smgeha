import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import { productsAsync } from './actions';
import { ProductsAction, ProductsState } from './types';

const initState: ProductsState = {
  products: asyncState.init(),
};

const products = createReducer<ProductsState, ProductsAction>(initState, {
  ...createAsyncReducer(productsAsync, 'products'),
});

export default products;
