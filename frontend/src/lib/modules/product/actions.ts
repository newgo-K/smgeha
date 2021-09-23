import { AxiosError } from 'axios';
import { resProductPacket } from 'lib/api/product';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';

export const REQ_PRODUCTS_ACTION_TYPE = createAsyncActionType(
  'product/REQ_PRODUCTS',
);

export const productsAsync = createActionEntity<
  null,
  resProductPacket,
  AxiosError
>(REQ_PRODUCTS_ACTION_TYPE);

export const actions = {
  productsAsync,
};
