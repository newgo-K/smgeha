import { AxiosError } from 'axios';
import { reqProductSelectPacket, resProductPacket } from 'lib/api/product';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductAction = ActionType<typeof actions>;

export type ProductState = {
  view: AsyncState<reqProductSelectPacket, resProductPacket, AxiosError>;
};
