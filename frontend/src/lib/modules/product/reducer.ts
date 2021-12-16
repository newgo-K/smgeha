import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import { productSelectAsync } from './actions';
import { ProductAction, ProductState } from './types';

const initState: ProductState = {
  info: asyncState.init(),
};

const product = createReducer<ProductState, ProductAction>(initState, {
  ...createAsyncReducer(productSelectAsync, 'info'),
});

export default product;
