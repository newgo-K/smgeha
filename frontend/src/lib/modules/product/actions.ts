import { AxiosError } from 'axios';
import {
  reqProductDeletePacket,
  reqProductSelectPacket,
  resProductPacket,
} from 'lib/api/product';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const REQ_PRODUCT_SELECT = createAsyncActionType(
  'product/REQ_PRODUCT_SELECT',
);

export const REQ_PRODUCT_DELETE = createAsyncActionType(
  'product/REQ_PRODUCT_DELETE',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productSelectAsync = createActionEntity<
  reqProductSelectPacket,
  resProductPacket,
  AxiosError
>(REQ_PRODUCT_SELECT);

export const productDelectAsync = createActionEntity<
  reqProductDeletePacket,
  null,
  AxiosError
>(REQ_PRODUCT_DELETE);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productSelectAsync,
  productDelectAsync,
};
