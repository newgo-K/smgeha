import styled from '@emotion/styled';
import React from 'react';
import palette from 'lib/styles/palette';
import Icon from 'lib/icon/Icon';
import { Desktop, formWidth, mediaQuery, Mobile } from 'lib/styles/common';
import CustomizedMenus from 'components/common/Menu';

function MainHeader() {
  return (
    <Wrap>
      <Desktop>
        <img src="/img/logo.png" alt="logo" />
        <CustomizedMenus />

        <Icon icon="search" color={palette.black[0]} size="1.1rem" />
      </Desktop>

      <Mobile>
        <img src="/img/logo.png" alt="logo" />
        <div>
          <Icon icon="menu" color={palette.black[0]} size="1.2rem" />
          <Icon icon="search" color={palette.black[0]} size="1.2rem" />
        </div>
      </Mobile>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  background: ${palette.white};
  height: 40px;
  justify-content: space-between;

  div {
    display: flex;
    flex: 2 1 1;
  }

  img {
    width: 147px;
    height: 35px;
  }

  ${mediaQuery('xs')} {
    img {
      width: 100px;
      height: 24px;
    }

    div {
      display: flex;
      align-content: center;
    }

    justify-content: space-between;

    svg {
      margin-left: 15px;
    }

    padding: 0 10px;
    min-width: ${formWidth()};
    max-width: ${formWidth('desktop')};
  }
`;

export default MainHeader;
