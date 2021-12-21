import { AxiosError } from 'axios';
import {
  reqProductsCategorySelectPacket,
  reqProductSubCategorySearchPacket,
  resProductPacket,
} from 'lib/api/products';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductsAction = ActionType<typeof actions>;

export type ProductsState = {
  list: AsyncState<
    reqProductsCategorySelectPacket | reqProductSubCategorySearchPacket,
    Array<resProductPacket>,
    AxiosError
  >;
};
