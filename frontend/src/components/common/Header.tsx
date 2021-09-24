import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import palette from 'lib/styles/palette';
import Icon from 'lib/icon/Icon';
import { Desktop, formWidth, mediaQuery, Mobile } from 'lib/styles/common';
import Button, { ButtonProps } from './Button';

function Header({ titles, onClick }: any) {
  return (
    <Wrap>
      <Desktop>
        <img src="/img/logo.png" alt="logo" />
        <ElList>
          {titles.map((title: string, index: number) => (
            <li key={title}>
              <ButtonStyles variant="text" onClick={() => onClick(index)}>
                {title}
              </ButtonStyles>
            </li>
          ))}
        </ElList>

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

const ButtonStyles = (props: ButtonProps) => (
  <Button
    css={css`
      font-size: 15px !important;
      color: ${palette.black[0]} !important;
      cursor: pointer;
      .MuiButton-label {
        &:hover {
          color: ${palette.main[4]};
        }
      }
    `}
    {...props}
  />
);

const ElList = styled.ul`
  min-width: 1000px;
  display: flex;
  justify-content: space-between;

  li {
    display: flex;
    align-items: center;
  }
`;

export default Header;
