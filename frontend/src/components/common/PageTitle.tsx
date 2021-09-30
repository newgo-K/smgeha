import styled from '@emotion/styled';
import { formWidth, mediaQuery } from 'lib/styles/common';
import palette from 'lib/styles/palette';
import React from 'react';

export type PageTitleProps = {
  /** 좌측 내용 */
  leftContent?: any;
  /** 타이틀 */
  title?: string;
  maxWidth?: string | number;
  /** 우측 내용 */
  rightContent?: any;
};

function PageTitle({
  leftContent,
  title,
  maxWidth = '460px',
  rightContent,
}: PageTitleProps) {
  const LeftContent = leftContent;
  const RightContent = rightContent;

  return (
    <Wrap css={{ maxWidth }}>
      <ElementList>
        <li>{leftContent && <LeftContent />}</li>
        <li>
          <h1 dangerouslySetInnerHTML={{ __html: title! }} />
        </li>
        <li>{rightContent && <RightContent />}</li>
      </ElementList>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  height: 40px;
  margin: 0 auto;
  padding: 0.375rem 0;
  border-bottom: 1px solid ${palette.grey[2]};
  background: ${palette.white};
  border-radius: 4px;
  z-index: 2;

  ${mediaQuery('xs')} {
    padding: 0 10px;
    width: ${formWidth()};
    /* max-width: ${formWidth('desktop')}; */
  }
`;

const ElementList = styled.ul`
  display: flex;
  align-items: center;
  flex: 1;

  li {
    :nth-of-type(1) {
      flex: 1;
    }
    :nth-of-type(2) {
      flex: 7;
    }
    :nth-of-type(3) {
      flex: 1;
      text-align: right;
    }
  }

  h1 {
    padding-top: 0.0625rem;
    text-align: center;
  }
`;

export default PageTitle;
