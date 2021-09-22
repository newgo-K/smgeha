import styled from '@emotion/styled';
import React from 'react';

function BI() {
  return <Wrap><img src="/img/logo.png" alt="logo"/></Wrap>;
}

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 7.5rem;
  margin-bottom: 2.5rem;
`;

export default BI;
