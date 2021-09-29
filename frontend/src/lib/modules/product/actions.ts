import { AxiosError } from 'axios';
import { reqProductSelectPacket, resProductPacket } from 'lib/api/product';
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

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productSelectAsync = createActionEntity<
  reqProductSelectPacket,
  resProductPacket,
  AxiosError
>(REQ_PRODUCT_SELECT);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productSelectAsync,
};
