import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import isLogin from './isLogin';

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
