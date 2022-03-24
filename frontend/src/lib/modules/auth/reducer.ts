import produce from 'immer';
import { asyncState, createAsyncReducer } from 'lib/common/reducerUtils';
import { createReducer } from 'typesafe-actions';
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
  loginAsync,
  loginCheckAsync,
  SET_USER,
} from './actions';
import { AuthAction, UserState } from './types';

const initState: UserState = {
  loginForm: {
    userId: '',
    password: '',
  },
  user: {
    role: '',
    token: '',
  },
  login: asyncState.init(),
  loginCheck: asyncState.init(),
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
  [SET_USER]: (state, { payload: user }) => ({
    ...state,
    user: JSON.parse(String(user)),
  }),
  ...createAsyncReducer(loginAsync, 'login'),
  ...createAsyncReducer(loginCheckAsync, 'loginCheck'),
});

export default user;
