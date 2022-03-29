import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import isLogin from './isLogin';

// 로그인할 경우 해당 페이지 접근하면 메인 페이지로 이동
function PublicRoute({ component: Component, restricted, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}

export default PublicRoute;
