import produce from 'immer';
import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import {
  changePasswordAsync,
  CHANGE_FIELD,
  checkCodeAsync,
  INITIALIZE_FORM,
  loginAsync,
  pinCodeAsync,
  registerAsync,
} from './actions';
import { AuthAction, UserState } from './types';

const initState: UserState = {
  loginForm: {
    email: '',
    password: '',
  },
  registerForm: {
    email: '',
    pinCode: '',
    password: '',
    nickname: '',
    mobile: '',
  },
  findPasswordForm: {
    email: '',
    pinCode: '',
    password: '',
  },
  login: asyncState.init(),
  register: asyncState.init(),
  pinCode: asyncState.init(),
  checkCode: asyncState.init(),
  changePassword: asyncState.init(),
};

const user = createReducer<UserState, AuthAction>(initState, {
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    produce(state, (draft: { [index: string]: any }) => {
      draft[form][key] = value;
    }),
  [INITIALIZE_FORM]: (state, { payload: form }) => ({
    ...state,
    [form]: initState[form as 'loginForm'],
  }),
  ...createAsyncReducer(loginAsync, 'login'),
  ...createAsyncReducer(registerAsync, 'register'),
  ...createAsyncReducer(pinCodeAsync, 'pinCode'),
  ...createAsyncReducer(checkCodeAsync, 'checkCode'),
  ...createAsyncReducer(changePasswordAsync, 'changePassword'),
});

export default user;
