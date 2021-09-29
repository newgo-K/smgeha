import { AxiosError } from 'axios';
import {
  reqProductsMainMenuSelectPacket,
  reqProductsSideMenuSelectPacket,
  resProductPacket,
} from 'lib/api/products';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductsAction = ActionType<typeof actions>;

export type ProductsState = {
  productsMainMenuSelect: number;
  viewData: AsyncState<
    reqProductsMainMenuSelectPacket | reqProductsSideMenuSelectPacket,
    resProductPacket,
    AxiosError
  >;
};
