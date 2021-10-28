import { AxiosError } from 'axios';
import { ImgsProps } from 'lib/api/write';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const PRODUCT_WRITE_SET_FORM = 'write/PRODUCT_WRITE_SET_FORM';
export const REQ_PRODUCT_WRITE_UPLOAD = createAsyncActionType(
  'write/REQ_PRODUCT_WRITE_UPLOAD',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productWriteSetForm = createAction(
  PRODUCT_WRITE_SET_FORM,
  ({ key, value }) => ({ key, value }),
)<any>();

export const productWriteUploadAsync = createActionEntity<any, any, AxiosError>(
  REQ_PRODUCT_WRITE_UPLOAD,
);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productWriteSetForm,
  productWriteUploadAsync,
};
