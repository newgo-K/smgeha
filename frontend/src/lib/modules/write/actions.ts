import { AxiosError } from 'axios';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const PRODUCT_WRITE_INIT_FORM = 'write/PRODUCT_WRITE_INIT_FORM';
export const PRODUCT_WRITE_SET_FORM = 'write/PRODUCT_WRITE_SET_FORM';

export const REQ_PRODUCT_WRITE_CATEGORY = createAsyncActionType(
  'write/REQ_PRODUCT_WRITE_CATEGORY',
);
export const REQ_PRODUCT_WRITE_SELECT = createAsyncActionType(
  'write/REQ_PRODUCT_WRITE_SELECT',
);
export const REQ_PRODUCT_WRITE_UPLOAD = createAsyncActionType(
  'write/REQ_PRODUCT_WRITE_UPLOAD',
);
export const REQ_PRODUCT_WRITE_MODIFY = createAsyncActionType(
  'write/REQ_PRODUCT_WRITE_MODIFY',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productWriteInitForm = createAction(
  PRODUCT_WRITE_INIT_FORM,
  ({ value }) => ({ value }),
)<any>();

export const productWriteSetForm = createAction(
  PRODUCT_WRITE_SET_FORM,
  ({ key, value }) => ({ key, value }),
)<any>();

export const productWriteCategoryAsync = createActionEntity<
  any,
  any,
  AxiosError
>(REQ_PRODUCT_WRITE_CATEGORY);

export const productWriteSelectAsync = createActionEntity<any, any, AxiosError>(
  REQ_PRODUCT_WRITE_SELECT,
);

export const productWriteUploadAsync = createActionEntity<any, any, AxiosError>(
  REQ_PRODUCT_WRITE_UPLOAD,
);

export const productWriteModifyAsync = createActionEntity<any, any, AxiosError>(
  REQ_PRODUCT_WRITE_MODIFY,
);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productWriteInitForm,
  productWriteSetForm,
  productWriteCategoryAsync,
  productWriteSelectAsync,
  productWriteUploadAsync,
  productWriteModifyAsync,
};
