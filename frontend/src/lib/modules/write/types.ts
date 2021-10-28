import { AxiosError } from 'axios';
import { ImgsProps, ReqWriteForm } from 'lib/api/write';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductWriteAction = ActionType<typeof actions>;

export type ProductWriteState = {
  writeForm: ReqWriteForm;
  upload: AsyncState<ReqWriteForm, null, AxiosError>;
};
