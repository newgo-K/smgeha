import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';
import palette from 'lib/styles/palette';
import Icon from 'lib/icon/Icon';
import { Desktop, formWidth, mediaQuery, Mobile } from 'lib/styles/common';
import Button, { ButtonProps } from './Button';
import { resProductCategoryPacket } from 'lib/api/category';
import { Drawer, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { resLoginPacket } from 'lib/api/auth';

type HeaderPorps = {
  categories: Array<resProductCategoryPacket> | null;
  drawerFlag: boolean;
  user: resLoginPacket;
  onClick: (e: number) => void;
  toggleDrawer: (e: boolean) => void;
  onWrite: () => void;
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
  user,
  onClick,
  toggleDrawer,
  onWrite,
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
              <DrawerContentStyles key={category.code}>
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
                <Grid item={true} sm={2} key={category.code}>
                  <li>
                    <ButtonStyles
                      variant="text"
                      onClick={() => onClick(category.code)}
                    >
                      {category.name}
                    </ButtonStyles>
                  </li>
                </Grid>
              ))}
          </ElList>
        </Desktop>
      </>
    );
  };
  return (
    <Wrap>
      <Desktop>
        <Grid item={true} sm={2}>
          <img src="/img/logo.png" alt="logo" />
        </Grid>
        <Grid item={true} sm={8}>
          {categories && list(categories)}
        </Grid>
      </Desktop>

      <Mobile>
        <img src="/img/logo.png" alt="logo" />
        <div>
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
      {user.role && (
        <WriteButtonStyles>
          <Button iconOnly variant="outlined" onClick={onWrite}>
            <Icon icon="imgAdd" color={palette.main[4]} />
          </Button>
        </WriteButtonStyles>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  height: 40px;
  padding: 0.625rem 0;
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
      font-size: 1rem !important;
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
  width: 100%;
  margin-left: 0.625rem;

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

const WriteButtonStyles = styled.div`
  display: flex;
  position: absolute;
  overflow: auto;
  top: 0.625rem;
  right: 0.9375rem;

  ${mediaQuery('xs')} {
    top: 3.1875rem;
    right: 0.4375rem;
    padding: 0.3125rem;
  }
`;

export default Header;
