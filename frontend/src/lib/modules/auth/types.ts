import { AxiosError } from 'axios';
import {
  reqLoginPacket,
  reqRegPacket,
  resChangePasswordPacket,
  resCheckCodePacket,
  resPinCodePacket,
} from 'lib/api/auth';
import { AsyncState } from 'lib/common/reducerUtils';
import { ActionType } from 'typesafe-actions';
import { actions } from './actions';

export type AuthAction = ActionType<typeof actions>;

export type UserState = {
  loginForm: {
    email: string;
    password: string;
  };
  registerForm: {
    email: string;
    pinCode: string;
    password: string;
    nickname: string;
    mobile: string;
  };
  findPasswordForm: {
    email: string;
    pinCode: string;
    password: string;
  };
  login: AsyncState<reqLoginPacket, AxiosError>;
  register: AsyncState<reqRegPacket, AxiosError>;
  pinCode: AsyncState<resPinCodePacket, AxiosError>;
  checkCode: AsyncState<resCheckCodePacket, AxiosError>;
  changePassword: AsyncState<resChangePasswordPacket, AxiosError>;
};
