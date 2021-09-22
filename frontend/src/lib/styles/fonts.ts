import { css } from '@emotion/core';
import { mediaQuery } from './common';

export const fixedFont = {
  d1: css`
    font-weight: 700;
    font-size: 1.875rem;
  `,
  d2: css`
    font-weight: 700;
    font-size: 1.5rem;
  `,
  h1: css`
    font-weight: 500;
    font-size: 1.25rem;
  `,
  h2: css`
    font-weight: 500;
    font-size: 1.125rem;
  `,
  h3: css`
    font-weight: 500;
    font-size: 1rem;
  `,
  s1: css`
    font-weight: 400;
    font-size: 0.875rem;
  `,
  s2: css`
    font-weight: 400;
    font-size: 0.75rem;
  `,
  b1: css`
    font-weight: 400;
    font-size: 0.875rem;
  `,
  b2: css`
    font-weight: 300;
    font-size: 0.688rem;
  `,
};

export const responsiveFont = {
  d1: css`
    font-weight: 700;
    font-size: 1.875rem;
    ${mediaQuery('xs')} {
      font-weight: 700;
      font-size: 1.5rem;
    }
  `,
  d2: css`
    font-weight: 700;
    font-size: 1.5rem;
    ${mediaQuery('xs')} {
      font-weight: 700;
      font-size: 1.5rem;
    }
  `,
  h1: css`
    font-weight: 700;
    font-size: 1.25rem;
    ${mediaQuery('xs')} {
      font-weight: 700;
      font-size: 1.5rem;
    }
  `,
  h2: css`
    font-weight: 500;
    font-size: 1.125rem;
    ${mediaQuery('xs')} {
      font-weight: 700;
      font-size: 1.125rem;
    }
  `,
  h3: css`
    font-weight: 500;
    font-size: 1rem;
    ${mediaQuery('xs')} {
      font-weight: 700;
      font-size: 1.125rem;
    }
  `,
  s1: css`
    font-weight: 400;
    font-size: 0.875rem;
    ${mediaQuery('xs')} {
      font-weight: 700;
      font-size: 1rem;
    }
  `,
  s2: css`
    font-weight: 400;
    font-size: 0.813rem;
    ${mediaQuery('xs')} {
      font-weight: 500;
      font-size: 0.875rem;
    }
  `,
  b1: css`
    font-weight: 400;
    font-size: 0.813rem;
    ${mediaQuery('xs')} {
      font-weight: 500;
      font-size: 0.875rem;
    }
  `,
  b2: css`
    font-weight: 400;
    font-size: 0.688rem;
    ${mediaQuery('xs')} {
      font-weight: 500;
      font-size: 0.8125rem;
    }
  `,
};
