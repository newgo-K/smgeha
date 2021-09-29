import { css } from '@emotion/react';
import HeaderContainer from 'containers/common/HeaderContainer';
import MainContainer from 'containers/main/MainContainer';
import React from 'react';

/** `Main` 페이지는 제품 목록을 보여주는 페이지입니다. */
function MainPage() {
  return (
    <div
      css={css`
        margin: 0 auto;
        width: 1350px;
        background-color: white;
      `}
    >
      <div>
        <HeaderContainer />
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
        ></div>

        <div
          css={css`
            width: 80%;
            margin: 0 auto;
          `}
        >
          <MainContainer />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
