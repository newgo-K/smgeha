import { createActionEntity } from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const PRODUCT_WRITE_SET_DATA = 'write/PRODUCT_WRITE_SELECT';
export const PRODUCT_UPLOAD = 'write/PRODUCT_UPLOAD';

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const productWriteSetData = createAction(
  PRODUCT_WRITE_SET_DATA,
  ({ key, value }) => ({ key, value }),
)<any>();

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  productWriteSetData,
};
