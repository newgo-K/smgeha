import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import palette from 'lib/styles/palette';
import Icon from 'lib/icon/Icon';
import { Desktop, formWidth, mediaQuery, Mobile } from 'lib/styles/common';
import Button, { ButtonProps } from './Button';
import { resProductCategoryPacket } from 'lib/api/category';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type HeaderPorps = {
  categories: Array<resProductCategoryPacket> | null;
  drawerFlag: boolean;
  onClick: (e: number) => void;
  toggleDrawer: (e: boolean) => void;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '340px',
  },
  fullList: {
    width: 'auto',
  },
}));

function Header({
  categories,
  drawerFlag,
  onClick,
  toggleDrawer,
}: HeaderPorps) {
  const classes = useStyles();

  const list = (categories: Array<resProductCategoryPacket>) => {
    return (
      <>
        <Mobile>
          <DrawerHeaderStyles>
            <Button variant="text" onClick={() => toggleDrawer(false)}>
              <Icon icon="close" color={palette.black[0]} size="1.1rem" />
            </Button>
          </DrawerHeaderStyles>

          {categories &&
            categories.map((category: resProductCategoryPacket) => (
              <DrawerContentStyles key={category.name}>
                <ButtonStyles
                  variant="text"
                  onClick={() => onClick(category.code)}
                >
                  {category.name}
                </ButtonStyles>
              </DrawerContentStyles>
            ))}
        </Mobile>

        <Desktop>
          <ElList>
            {categories &&
              categories.map((category: resProductCategoryPacket) => (
                <li key={category.code}>
                  <ButtonStyles
                    variant="text"
                    onClick={() => onClick(category.code)}
                  >
                    {category.name}
                  </ButtonStyles>
                </li>
              ))}
          </ElList>
        </Desktop>
      </>
    );
  };
  return (
    <Wrap>
      <Desktop>
        <img src="/img/logo.png" alt="logo" />
        {categories && list(categories)}
        <Icon icon="search" size="1.1rem" color={palette.black[0]} />
      </Desktop>

      <Mobile>
        <img src="/img/logo.png" alt="logo" />
        <div>
          <Icon icon="search" size="1.2rem" color={palette.black[0]} />
          <Button variant="text" onClick={() => toggleDrawer(true)}>
            <Icon icon="menu" size="1.1rem" color={palette.black[0]} />
          </Button>
        </div>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor="right"
          open={drawerFlag}
          onClose={() => toggleDrawer(false)}
        >
          {categories && list(categories)}
        </Drawer>
      </Mobile>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0.625rem 1.125rem;
  background: ${palette.white};

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
      margin-left: 0.9375rem;
    }

    padding: 0 0.625rem;
    min-width: ${formWidth()};
    max-width: ${formWidth()};
  }
`;

const DrawerContentStyles = styled.li`
  border-bottom: 1px solid ${palette.grey[2]};
`;

const ButtonStyles = (props: ButtonProps) => (
  <Button
    css={css`
      color: ${palette.black[0]} !important;
      font-size: 15px !important;
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
  display: flex;
  justify-content: space-between;
  min-width: 1000px;

  li {
    display: flex;
    align-items: center;

    ${mediaQuery('xs')} {
      border-bottom: 1px solid ${palette.grey[2]} !important;
    }
  }
`;

const DrawerHeaderStyles = styled.div`
  border-bottom: 1px solid ${palette.grey[2]};
  text-align: right;
`;

export default Header;
