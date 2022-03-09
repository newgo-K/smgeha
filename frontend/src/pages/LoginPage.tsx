import CommonTemplate from 'components/common/template/CommonTemplate';
import LoginContainer from 'containers/auth/LoginContainer';
import React from 'react';

/** `Login` 페이지는 로그인 할 때 사용하는 페이지입니다. */
function LoginPage() {
  return (
    <CommonTemplate>
      <LoginContainer />
    </CommonTemplate>
  );
}

export default LoginPage;
