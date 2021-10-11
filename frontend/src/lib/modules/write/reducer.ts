import produce from 'immer';
import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import { PRODUCT_WRITE_SET_DATA } from './actions';
import { ProductWriteAction, ProductWriteState } from './types';

const initState: ProductWriteState = {
  productWriteSetData: {
    title: '',
    serial: '',
    product: 0,
    manufacture: 0,
    size: '',
    type: 0,
    price: '',
  },
};

const write = createReducer<ProductWriteState, ProductWriteAction>(initState, {
  [PRODUCT_WRITE_SET_DATA]: (state, { payload: { key, value } }) =>
    produce(state, (draft: { [index: string]: any }) => {
      draft['productWriteSetData'][key] = value;
    }),
});

export default write;
