import { Global } from '@emotion/react';
import React from 'react';
import initStyles from 'initStyles';

import { Route } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';

import initTheme from 'initTheme';
import ProductsPage from 'pages/ProductsPage';
import ProductPage from 'pages/ProductPage';

function App() {
  return (
    <>
      <Global styles={initStyles} />
      <ThemeProvider theme={initTheme}>
        <Route component={ProductsPage} path="/main" exact />
        <Route component={ProductPage} path="/product/:id" />
      </ThemeProvider>
    </>
  );
}

export default App;
