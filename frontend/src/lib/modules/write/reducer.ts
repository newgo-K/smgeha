import produce from 'immer';
import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import {
  productWriteCategoryAsync,
  productWriteUploadAsync,
  PRODUCT_WRITE_SET_FORM,
} from './actions';
import { ProductWriteAction, ProductWriteState } from './types';

const initState: ProductWriteState = {
  writeForm: {
    productCode: 2,
    manufactureCode: 0,
    sizeCode: 0,
    typeCode: 0,
    title: '',
    url: '',
    serial: '',
    product: 0,
    manufacture: '',
    size: '',
    price: 0,
    images: [],
  },
  category: asyncState.init(),
  upload: asyncState.init(),
};

const write = createReducer<ProductWriteState, ProductWriteAction>(initState, {
  [PRODUCT_WRITE_SET_FORM]: (state, { payload: { key, value } }) =>
    produce(state, (draft: { [index: string]: any }) => {
      draft['writeForm'][key] = value;
    }),
  ...createAsyncReducer(productWriteCategoryAsync, 'category'),
  ...createAsyncReducer(productWriteUploadAsync, 'upload'),
});

export default write;
