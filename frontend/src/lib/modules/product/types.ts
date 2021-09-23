import { AxiosError } from 'axios';
import { resProductPacket } from 'lib/api/product';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductsAction = ActionType<typeof actions>;

export type ProductsState = {
  products: AsyncState<resProductPacket, AxiosError>;
};
