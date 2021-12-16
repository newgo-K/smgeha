import { AxiosError } from 'axios';
import {
  resProductCategoryPacket,
  resProductSubCategoryPacket,
} from 'lib/api/category';
import { reqProductsMainMenuSelectPacket } from 'lib/api/products';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const REQ_PRODUCT_CATEGORY_INIT = createAsyncActionType(
  'category/REQ_PRODUCT_CATEGORY_INIT',
);

export const REQ_PRODUCT_SUB_CATEGORY_SELECT = createAsyncActionType(
  'category/REQ_PRODUCT_SUB_CATEGORY_SELECT',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productCategoryInitAsync = createActionEntity<
  null,
  Array<resProductCategoryPacket>,
  AxiosError
>(REQ_PRODUCT_CATEGORY_INIT);

export const productSubCategorySelectAsync = createActionEntity<
  reqProductsMainMenuSelectPacket,
  Array<resProductSubCategoryPacket>,
  AxiosError
>(REQ_PRODUCT_SUB_CATEGORY_SELECT);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productCategoryInitAsync,
  productSubCategorySelectAsync,
};
