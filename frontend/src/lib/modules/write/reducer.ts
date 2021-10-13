import produce from 'immer';
import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import { productWriteUploadAsync, PRODUCT_WRITE_SET_DATA } from './actions';
import { ProductWriteAction, ProductWriteState } from './types';

const initState: ProductWriteState = {
  selectForm: {
    title: '',
    serial: '',
    product: 0,
    manufacture: 0,
    size: '',
    type: 0,
    price: '',
  },
  imgForm: {
    img: [],
  },
  upload: asyncState.init(),
};

const write = createReducer<ProductWriteState, ProductWriteAction>(initState, {
  [PRODUCT_WRITE_SET_DATA]: (state, { payload: { form, key, value } }) =>
    produce(state, (draft: { [index: string]: any }) => {
      draft[form][key] = value;
    }),
  ...createAsyncReducer(productWriteUploadAsync, 'upload'),
});

export default write;
