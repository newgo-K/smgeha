import { Global } from '@emotion/react';
import React from 'react';
import initStyles from 'initStyles';

import { Route } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';

import initTheme from 'initTheme';
import ProductsPage from 'pages/ProductsPage';
import ProductPage from 'pages/ProductPage';
import ProductWritePage from 'pages/ProductWritePage';
import LoginPage from 'pages/LoginPage';
import PublicRoute from 'lib/router/PublicRoute';
import PrivateRoute from 'lib/router/PrivateRoute';

function App() {
  return (
    <>
      <Global styles={initStyles} />
      <ThemeProvider theme={initTheme}>
        <Route component={ProductsPage} path="/" exact />
        <PublicRoute restricted component={LoginPage} path="/login" />
        <Route component={ProductPage} path="/product/:id" />
        <PrivateRoute component={ProductWritePage} path="/write" />
      </ThemeProvider>
    </>
  );
}

export default App;
