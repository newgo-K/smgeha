import Login from 'components/auth/Login';
import { nullCheck } from 'lib/common/commonLib';
import { RootState } from 'lib/modules';
import { changeField, loginAsync } from 'lib/modules/auth';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { authErrorStates } from './error';

function LoginContainer({ history }: RouteChildrenProps) {
  const dispatch = useDispatch();
  const { form, data } = useSelector(({ auth }: RootState) => ({
    form: auth.loginForm,
    data: auth.login.success,
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
    if (nullCheck(data)) {
      return;
    }

    try {
      localStorage.setItem('user', JSON.stringify(data));
    } catch (e) {
      console.log('localStorage is not working');
    }

    history.push('/');
  }, [dispatch, history, data]);

  useEffect(() => {}, [error]);

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

export default withRouter(LoginContainer);
