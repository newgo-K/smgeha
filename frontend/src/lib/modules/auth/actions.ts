import { AxiosError } from 'axios';
import { reqLoginPacket, resLoginPacket } from 'lib/api/auth';
import {
  createActionEntity,
  createAsyncActionType,
} from 'lib/common/reducerUtils';
import { createAction } from 'typesafe-actions';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const LOGIN_ACTION_TYPE = createAsyncActionType('auth/LOGIN');

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

export const actions = {
  changeField,
  initForm,
  loginAsync,
};
