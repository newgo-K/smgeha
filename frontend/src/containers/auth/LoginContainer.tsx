import Login from 'components/auth/Login';
import { RootState } from 'lib/modules';
import { changeField, loginAsync } from 'lib/modules/auth';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authErrorTexts, authErrorStates } from './error';

function LoginContainer() {
  const dispatch = useDispatch();
  const { form, data, status } = useSelector(({ auth }: RootState) => ({
    form: auth.loginForm,
    data: auth.login.success,
    status: auth.login.error?.response?.status,
  }));

  const [errorStates, setErrorStates] = useState<any>(authErrorStates.login);
  const [error, setError] = useState<string>('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { value, name } = e.target;

      let states = errorStates;

      setErrorStates(states);

      dispatch(
        changeField({
          form: 'loginForm',
          key: name,
          value,
        }),
      );

      setError('');
    },
    [errorStates, dispatch],
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { userId, password } = form;

    if ([userId, password].includes('')) {
      setError('아이디 혹은 비밀번호를 입력해 주세요.');
      return;
    }

    dispatch(loginAsync.request(form));
  };

  useEffect(() => {
    if (status === 401) {
      setError(authErrorTexts.login401);
      return;
    }
  }, [status]);

  return (
    <Login
      form={form}
      errorStates={errorStates}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
}

export default LoginContainer;
