import { AxiosError } from 'axios';
import { resProductCategoryPacket } from 'lib/api/category';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type CategoryAction = ActionType<typeof actions>;

export type CategoryState = {
  productCategory: AsyncState<
    null,
    Array<resProductCategoryPacket>,
    AxiosError
  >;
};
