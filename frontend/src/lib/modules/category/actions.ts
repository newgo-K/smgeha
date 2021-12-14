/////////////////////////////////////
// createActionType

import { AxiosError } from 'axios';
import { resProductCategoryPacket } from 'lib/api/category';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';

/////////////////////////////////////
export const REQ_PRODUCT_CATEGORY_INIT = createAsyncActionType(
  'category/REQ_PRODUCT_CATEGORY_INIT',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productCategoryInitAsync = createActionEntity<
  null,
  Array<resProductCategoryPacket>,
  AxiosError
>(REQ_PRODUCT_CATEGORY_INIT);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productCategoryInitAsync,
};
