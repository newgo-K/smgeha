import { css } from '@emotion/react';
import palette from 'lib/styles/palette';
import resetStyle from 'resetStyle';

const initStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');

  ${resetStyle};

  html {
    height: 100%;
  }

  body {
    font-family: 'Roboto', 'Noto Sans KR', 'sans-serif' !important;
    height: 100%;
    /* background: ${palette.grey[0]}; */
    line-height: 1.5;
  }

  #root {
    height: 100%;
  }

  h1 {
    font-size: 1rem;
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
    font-size: 0.875rem;
  }

  input::placeholder {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${palette.grey[5]} !important;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export default initStyles;
