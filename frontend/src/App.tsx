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
        {/* 제품 목록 */}
        <Route component={ProductsPage} path="/" exact />
        {/* 로그인 페이지 */}
        <PublicRoute restricted component={LoginPage} path="/login" />
        {/* 제품 정보 */}
        <Route component={ProductPage} path="/product/:id" />
        {/* 제품 등록 */}
        <PrivateRoute
          component={ProductWritePage}
          path={['/write', '/write/:id']}
        />
      </ThemeProvider>
    </>
  );
}

export default App;
