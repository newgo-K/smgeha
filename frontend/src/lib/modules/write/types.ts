import { AxiosError } from 'axios';
import {
  reqWriteCategoryPacket,
  reqWriteFormPacket,
  reqWriteSelectPacket,
  resWriteCategoryPacket,
} from 'lib/api/write';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductWriteAction = ActionType<typeof actions>;

export type ProductWriteState = {
  writeForm: reqWriteFormPacket;
  category: AsyncState<
    reqWriteCategoryPacket,
    resWriteCategoryPacket,
    AxiosError
  >;
  select: AsyncState<reqWriteSelectPacket, resWriteCategoryPacket, AxiosError>;
};
