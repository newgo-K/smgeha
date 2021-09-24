import { AxiosError } from 'axios';
import { reqHeaderMenuSelectPacket } from 'lib/api/common';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';

export const REQ_HEDER_MENU_SELECT = createAsyncActionType(
  'common/REQ_HEDER_MENU_SELECT',
);

export const headerMenuSelectAsync = createActionEntity<
  reqHeaderMenuSelectPacket,
  null,
  AxiosError
>(REQ_HEDER_MENU_SELECT);

export const actions = {
  headerMenuSelectAsync,
};
