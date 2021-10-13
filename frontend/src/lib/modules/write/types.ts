import { AxiosError } from 'axios';
import { ImgsProps, SelectTypesProps } from 'lib/api/write';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type ProductWriteAction = ActionType<typeof actions>;

export type ProductWriteState = {
  selectForm: SelectTypesProps;
  imgForm: ImgsProps;
  upload: AsyncState<any, any, AxiosError>;
};
