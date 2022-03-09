import { AxiosError } from 'axios';
import { reqLoginPacket } from 'lib/api/auth';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type AuthAction = ActionType<typeof actions>;

export type UserState = {
  loginForm: {
    userId: string;
    password: string;
  };
  login: AsyncState<reqLoginPacket, AxiosError>;
};
