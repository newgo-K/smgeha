import { css } from '@mui/styled-engine';
import MainHedaer from 'components/main/MainHeader';
import MainBody from 'components/main/MainBody';
import MainSideMenu from 'components/main/MainSideMenu';
import React from 'react';

/** `Main` 페이지는 제품 목록을 보여주는 페이지입니다. */
function MainTest({ data }: any) {
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 1350px;
        background-color: white;
      `}
    >
      <div>
        <MainHedaer />
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 60px;
        `}
      >
        <div
          css={css`
            width: 15%;
            margin: 0 auto;
          `}
        >
          <MainSideMenu />
        </div>

        <div
          css={css`
            width: 80%;
            margin: 0 auto;
          `}
        >
          <MainBody data={data} />
        </div>
      </div>
    </div>
  );
}

export default MainTest;
