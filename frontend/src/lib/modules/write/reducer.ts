import produce from 'immer';
import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import { productWriteUploadAsync, PRODUCT_WRITE_SET_FORM } from './actions';
import { ProductWriteAction, ProductWriteState } from './types';

const initState: ProductWriteState = {
  writeForm: {
    title: '',
    serial: '',
    product: 0,
    manufacture: 0,
    manufactureText: '',
    size: 0,
    sizeText: '',
    type: 0,
    price: '',
    images: [],
  },
  upload: asyncState.init(),
};

const write = createReducer<ProductWriteState, ProductWriteAction>(initState, {
  [PRODUCT_WRITE_SET_FORM]: (state, { payload: { key, value } }) =>
    produce(state, (draft: { [index: string]: any }) => {
      draft['writeForm'][key] = value;
    }),
  ...createAsyncReducer(productWriteUploadAsync, 'upload'),
});

export default write;
