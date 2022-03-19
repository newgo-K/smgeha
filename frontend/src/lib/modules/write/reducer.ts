import produce from 'immer';
import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import {
  productWriteCategoryAsync,
  productWriteModifyAsync,
  productWriteSelectAsync,
  productWriteUploadAsync,
  PRODUCT_WRITE_INIT_FORM,
  PRODUCT_WRITE_SET_FORM,
} from './actions';
import { ProductWriteAction, ProductWriteState } from './types';

const initState: ProductWriteState = {
  writeForm: {
    id: 0,
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
  select: asyncState.init(),
  upload: asyncState.init(),
  modify: asyncState.init(),
};

const write = createReducer<ProductWriteState, ProductWriteAction>(initState, {
  [PRODUCT_WRITE_INIT_FORM]: (state, { payload: { value } }) =>
    produce(state, (draft) => {
      draft['writeForm'] = value;
    }),
  [PRODUCT_WRITE_SET_FORM]: (state, { payload: { key, value } }) =>
    produce(state, (draft: { [index: string]: any }) => {
      draft['writeForm'][key] = value;
    }),
  ...createAsyncReducer(productWriteCategoryAsync, 'category'),
  ...createAsyncReducer(productWriteSelectAsync, 'select'),
  ...createAsyncReducer(productWriteUploadAsync, 'upload'),
  ...createAsyncReducer(productWriteModifyAsync, 'modify'),
});

export default write;
