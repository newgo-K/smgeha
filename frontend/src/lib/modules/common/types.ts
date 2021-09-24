import { AxiosError } from 'axios';
import { reqHeaderMenuSelectPacket } from 'lib/api/common';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type CommonAction = ActionType<typeof actions>;

export type CommonState = {
  headerMenuSelect: AsyncState<reqHeaderMenuSelectPacket, AxiosError>;
};
