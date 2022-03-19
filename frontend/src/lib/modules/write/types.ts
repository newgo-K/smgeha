import { AxiosError } from 'axios';
import { ReqWriteForm } from 'lib/api/write';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductWriteAction = ActionType<typeof actions>;

export type ProductWriteState = {
  writeForm: ReqWriteForm;
  category: AsyncState<any, any, AxiosError>;
  select: AsyncState<any, any, AxiosError>;
  upload: AsyncState<ReqWriteForm, null, AxiosError>;
  modify: AsyncState<ReqWriteForm, null, AxiosError>;
};
