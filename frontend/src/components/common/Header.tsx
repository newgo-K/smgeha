import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import palette from 'lib/styles/palette';
import Icon from 'lib/icon/Icon';
import { Desktop, formWidth, mediaQuery, Mobile } from 'lib/styles/common';
import Button, { ButtonProps } from './Button';
import { resProductCategoryPacket } from 'lib/api/category';
import { HeaderPorps } from 'containers/common/CategoryContainer';
import { Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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

  const list = (categories: any) => {
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
              <DrawerContentStyles>
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
        {list(categories)}
        <Icon icon="search" color={palette.black[0]} size="1.1rem" />
      </Desktop>

      <Mobile>
        <img src="/img/logo.png" alt="logo" />
        <div>
          <Icon icon="search" color={palette.black[0]} size="1.2rem" />
          <Button variant="text" onClick={() => toggleDrawer(true)}>
            <Icon icon="menu" color={palette.black[0]} size="1.1rem" />
          </Button>
        </div>
        <Drawer
          classes={{ paper: classes.paper }}
          anchor="right"
          open={drawerFlag}
          onClose={() => toggleDrawer(false)}
        >
          {list(categories)}
        </Drawer>
      </Mobile>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 18px;
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
    max-width: ${formWidth()};
  }
`;

const DrawerContentStyles = styled.li`
  border-bottom: 1px solid ${palette.grey[2]};
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
