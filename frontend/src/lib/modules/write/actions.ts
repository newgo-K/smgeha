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
export const PRODUCT_WRITE_SET_DATA = 'write/PRODUCT_WRITE_SELECT';
export const REQ_PRODUCT_WRITE_UPLOAD = createAsyncActionType(
  'write/REQ_PRODUCT_WRITE_UPLOAD',
);

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productWriteSetData = createAction(
  PRODUCT_WRITE_SET_DATA,
  ({ form, key, value }) => ({ form, key, value }),
)<any>();

export const productWriteUploadAsync = createActionEntity<any, any, AxiosError>(
  REQ_PRODUCT_WRITE_UPLOAD,
);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productWriteSetData,
  productWriteUploadAsync,
};
