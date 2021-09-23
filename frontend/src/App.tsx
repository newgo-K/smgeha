import { Global } from '@emotion/react';
import React from 'react';
import initStyles from 'initStyles';

import { Route } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';

import initTheme from 'initTheme';
import MainContainer from 'containers/main/MainContainer';

function App() {
  return (
    <>
      <Global styles={initStyles} />
      <ThemeProvider theme={initTheme}>
        <Route component={MainContainer} path="/main" exact />
      </ThemeProvider>
    </>
  );
}

export default App;
