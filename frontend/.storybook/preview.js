import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from 'lib/modules';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Global } from '@emotion/react';
import initStyles from 'initStyles';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '360px',
      height: '740px',
    },
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1024px',
      height: '1024px',
    },
  },
  WideScreen: {
    name: 'WideScreen',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...customViewports },
  },
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'Noto Sans KR', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: { xs: 0, md: 768, lg: 1440 },
  },
});

const store = createStore(rootReducer, composeWithDevTools());

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <BrowserRouter>
        <Global styles={initStyles} />
        <MuiThemeProvider theme={theme}>
          <Story />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  ),
];
