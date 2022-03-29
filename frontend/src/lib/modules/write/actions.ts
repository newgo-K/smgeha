import { AxiosError } from 'axios';
import {
  reqWriteCategoryPacket,
  reqWriteFormPacket,
  reqWriteModifyPacket,
  reqWriteSelectPacket,
  resWriteCategoryPacket,
} from 'lib/api/write';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const PRODUCT_WRITE_INIT_FORM = 'write/PRODUCT_WRITE_INIT_FORM';
export const PRODUCT_WRITE_INIT_SELECT = 'write/PRODUCT_WRITE_INIT_SELECT';
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
)<any>();

export const productWriteInitSelect = createAction(
  PRODUCT_WRITE_INIT_SELECT,
  ({ value }) => ({ value }),
)<any>();

export const productWriteSetForm = createAction(
  PRODUCT_WRITE_SET_FORM,
  ({ key, value }) => ({ key, value }),
)<any>();

export const productWriteUploadAsync = createActionEntity<
  reqWriteFormPacket,
  null,
  AxiosError
>(REQ_PRODUCT_WRITE_UPLOAD);

export const productWriteCategoryAsync = createActionEntity<
  reqWriteCategoryPacket,
  resWriteCategoryPacket,
  AxiosError
>(REQ_PRODUCT_WRITE_CATEGORY);

export const productWriteSelectAsync = createActionEntity<
  reqWriteSelectPacket,
  resWriteCategoryPacket,
  AxiosError
>(REQ_PRODUCT_WRITE_SELECT);

export const productWriteModifyAsync = createActionEntity<
  reqWriteModifyPacket,
  null,
  AxiosError
>(REQ_PRODUCT_WRITE_MODIFY);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productWriteInitForm,
  productWriteInitSelect,
  productWriteSetForm,
  productWriteUploadAsync,
  productWriteCategoryAsync,
  productWriteSelectAsync,
  productWriteModifyAsync,
};
