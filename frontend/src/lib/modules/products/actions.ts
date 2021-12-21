import { AxiosError } from 'axios';
import {
  reqProductsCategorySelectPacket,
  reqProductSubCategorySearchPacket,
  resProductPacket,
} from 'lib/api/products';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const REQ_PRODUCTS_INIT = createAsyncActionType(
  'products/REQ_PRODUCTS_INIT',
);

export const REQ_PRODUCTS_CATEGORY_SELECT = createAsyncActionType(
  'products/REQ_PRODUCTS_CATEGORY_SELECT',
);

export const REQ_PRODUCTS_SUB_CATEGORY_SEARCH = createAsyncActionType(
  'products/REQ_PRODUCTS_SUB_CATEGORY_SEARCH',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productsInitAsync = createActionEntity<
  number,
  resProductPacket,
  AxiosError
>(REQ_PRODUCTS_INIT);

export const productsCategorySelectAsync = createActionEntity<
  reqProductsCategorySelectPacket,
  resProductPacket,
  AxiosError
>(REQ_PRODUCTS_CATEGORY_SELECT);

export const productsSubCategorySearchAsync = createActionEntity<
  reqProductSubCategorySearchPacket,
  resProductPacket,
  AxiosError
>(REQ_PRODUCTS_SUB_CATEGORY_SEARCH);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productsInitAsync,
  productsCategorySelectAsync,
  productsSubCategorySearchAsync,
};
