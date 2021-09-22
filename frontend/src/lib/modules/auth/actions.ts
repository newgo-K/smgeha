import { AxiosError } from 'axios';
import {
  reqLoginPacket,
  reqRegPacket,
  resLoginPacket,
  resRegPacket,
  reqCheckCodePacket,
  resCheckCodePacket,
  reqChangePasswordPacket,
  resChangePasswordPacket,
  reqPinCodePacket,
  resPinCodePacket,
} from 'lib/api/auth';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const LOGIN_ACTION_TYPE = createAsyncActionType('auth/LOGIN');
export const PIN_CODE_ACTION_TYPE = createAsyncActionType('auth/PIN_CODE');
export const CHECK_CODE_ACTION_TYPE = createAsyncActionType('auth/CHECK_CODE');
export const REGISTER_ACTION_TYPE = createAsyncActionType('auth/REGISTER');
export const CHANGE_PASSWORD_ACTION_TYPE = createAsyncActionType(
  'auth/CHANGE_PASSWORD',
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
)();

export const initForm = createAction(INITIALIZE_FORM)<any>();

export const loginAsync = createActionEntity<
  reqLoginPacket,
  resLoginPacket,
  AxiosError
>(LOGIN_ACTION_TYPE);

export const registerAsync = createActionEntity<
  reqRegPacket,
  resRegPacket,
  AxiosError
>(REGISTER_ACTION_TYPE);

export const pinCodeAsync = createActionEntity<
  reqPinCodePacket,
  resPinCodePacket,
  AxiosError
>(PIN_CODE_ACTION_TYPE);

export const checkCodeAsync = createActionEntity<
  reqCheckCodePacket,
  resCheckCodePacket,
  AxiosError
>(CHECK_CODE_ACTION_TYPE);

export const changePasswordAsync = createActionEntity<
  reqChangePasswordPacket,
  resChangePasswordPacket,
  AxiosError
>(CHANGE_PASSWORD_ACTION_TYPE);

export const actions = {
  changeField,
  initForm,
  loginAsync,
  registerAsync,
  pinCodeAsync,
  checkCodeAsync,
  changePasswordAsync,
};
