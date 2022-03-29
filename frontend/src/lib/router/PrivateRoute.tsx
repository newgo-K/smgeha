import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import isLogin from './isLogin';

// 로그인이 필요한 페이지로 접근할 경우 로그인 페이지로
function PrivateRoute({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;
