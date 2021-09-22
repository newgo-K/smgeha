import { Global } from '@emotion/react';
import LoginPage from 'pages/LoginPage';
import React from 'react';
import initStyles from 'initStyles';

import { Route } from 'react-router';
import RegisterPage from 'pages/RegisterPage';
import RegisterSignUpContainer from 'containers/auth/RegisterSignUpContainer';
import FindPasswordContainer from 'containers/auth/FindPasswordContainer';
import { ThemeProvider } from '@material-ui/core/styles';

import initTheme from 'initTheme';
import ProductDetailPage from 'pages/ProductDetailPage';

function App() {
  return (
    <>
      <Global styles={initStyles} />
      <ThemeProvider theme={initTheme}>
        <Route component={ProductDetailPage} path="/" exact />
        <Route component={LoginPage} path="/login" />
        <Route
          component={FindPasswordContainer}
          path="/login/find-password"
          exact
        />
        <Route component={RegisterPage} path="/register" exact />
        <Route
          component={RegisterSignUpContainer}
          path="/register/signup"
          exact
        />
      </ThemeProvider>
    </>
  );
}

export default App;
