import { AxiosError } from 'axios';
import { reqLoginPacket, resLoginPacket } from 'lib/api/auth';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

/////////////////////////////////////
// createActionType
/////////////////////////////////////
export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
export const SET_USER = 'auth/SET_USER';

export const LOGIN_ACTION_TYPE = createAsyncActionType('auth/LOGIN');
export const LOGIN_CHECK = createAsyncActionType('auth/LOGIN_CHECK');

/////////////////////////////////////
// createActionEntity
/////////////////////////////////////
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
)();
export const initForm = createAction(INITIALIZE_FORM)<any>();
export const setUser = createAction(SET_USER)<any>();

export const loginAsync = createActionEntity<
  reqLoginPacket,
  resLoginPacket,
  AxiosError
>(LOGIN_ACTION_TYPE);

export const loginCheckAsync = createActionEntity<any, any, AxiosError>(
  LOGIN_CHECK,
);

/////////////////////////////////////
// actionsSetting
/////////////////////////////////////
export const actions = {
  changeField,
  initForm,
  setUser,
  loginAsync,
  loginCheckAsync,
};
