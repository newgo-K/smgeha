import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BI from 'components/common/BI';
import Button, { ButtonProps } from 'components/common/Button';
import TextField, { TextFieldProps } from 'components/common/TextField';
import palette from 'lib/styles/palette';
import React from 'react';

type LoginProps = {
  form: any;
  errorStates: any;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Login({ form, errorStates, error, onChange, onSubmit }: LoginProps) {
  return (
    <Wrap>
      <BI />

      <form onSubmit={onSubmit}>
        <TextFieldStyles
          name="userId"
          value={form.userId}
          maxWidth
          placeholder="아이디"
          onChange={onChange}
          error={errorStates['email']?.error}
          helperText={
            errorStates['email']?.error ? errorStates['email']?.helperText : ''
          }
        />
        <TextFieldStyles
          name="password"
          type="password"
          value={form.password}
          maxWidth
          placeholder="비밀번호"
          inputProps={{ maxLength: 24 }}
          onChange={onChange}
          error={errorStates['password']?.error}
          helperText={
            errorStates['password']?.error
              ? errorStates['password']?.helperText
              : ''
          }
        />
        {error && <ErrorMessageStyles>{error}</ErrorMessageStyles>}
        <ButtonStyles type="submit" size="large" maxWidth>
          로그인
        </ButtonStyles>
      </form>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
`;

const TextFieldStyles = (props: TextFieldProps) => (
  <div
    css={css`
      margin-bottom: 1.25rem;
    `}
  >
    <TextField {...props} />
  </div>
);

const ButtonStyles = (props: ButtonProps) => (
  <div
    css={css`
      padding: 1.875rem 0;
    `}
  >
    <Button {...props} />
  </div>
);

const ErrorMessageStyles = styled.div`
  color: ${palette.error[1]};
  text-align: center;
  font-size: 0.875rem;
  margin-top: 2rem;
`;

export default Login;
