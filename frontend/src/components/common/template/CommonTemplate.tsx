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
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: visible;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 30px;
  background: ${palette.white};
  max-width: ${formWidth('desktop')};

  border-left: 1px solid ${palette.grey[2]};
  border-right: 1px solid ${palette.grey[2]};

  ${mediaQuery('xs')} {
    padding: 0 10px;
    width: ${formWidth()};
    /* max-width: ${formWidth('desktop')}; */
  }
`;

export default CommonTemplate;
