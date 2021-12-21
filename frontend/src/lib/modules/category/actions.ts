import { AxiosError } from 'axios';
import {
  resProductCategoryPacket,
  resProductSubCategoryPacket,
} from 'lib/api/category';
import { reqProductsCategorySelectPacket } from 'lib/api/products';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const PRODUCT_CATEGORY_CODE = 'category/PRODUCT_CATEGORY_CODE';

export const REQ_PRODUCT_CATEGORY_INIT = createAsyncActionType(
  'category/REQ_PRODUCT_CATEGORY_INIT',
);

export const REQ_PRODUCT_SUB_CATEGORY_SELECT = createAsyncActionType(
  'category/REQ_PRODUCT_SUB_CATEGORY_SELECT',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productCategoryCode = createAction(
  PRODUCT_CATEGORY_CODE,
)<number>();

export const productCategoryInitAsync = createActionEntity<
  null,
  Array<resProductCategoryPacket>,
  AxiosError
>(REQ_PRODUCT_CATEGORY_INIT);

export const productSubCategorySelectAsync = createActionEntity<
  reqProductsCategorySelectPacket,
  Array<resProductSubCategoryPacket>,
  AxiosError
>(REQ_PRODUCT_SUB_CATEGORY_SELECT);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productCategoryCode,
  productCategoryInitAsync,
  productSubCategorySelectAsync,
};
