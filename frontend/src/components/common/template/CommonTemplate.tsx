import styled from '@emotion/styled';
import { formWidth, mediaQuery } from 'lib/styles/common';
import palette from 'lib/styles/palette';
import React from 'react';

export type CommonTemplateProps = {
  children: React.ReactNode;
};

function CommonTemplate({ children }: CommonTemplateProps) {
  return <Wrap>{children}</Wrap>;
}

const Wrap = styled.div`
  display: flex;
  overflow: visible;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  max-width: ${formWidth('desktop')};
  margin: 0 auto;
  padding: 0 0.625rem;
  border-left: 1px solid ${palette.grey[2]};
  border-right: 1px solid ${palette.grey[2]};
  background: ${palette.white};

  ${mediaQuery('xs')} {
    width: ${formWidth()};
  }
`;

export default CommonTemplate;
