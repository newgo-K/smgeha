import { AxiosError } from 'axios';
import {
  reqProductsMainMenuSelectPacket,
  reqProductSubCategorySearchPacket,
  resProductPacket,
} from 'lib/api/products';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductsAction = ActionType<typeof actions>;

export type ProductsState = {
  productsMainMenuSelect: number;
  list: AsyncState<
    reqProductsMainMenuSelectPacket | reqProductSubCategorySearchPacket,
    Array<resProductPacket>,
    AxiosError
  >;
};
