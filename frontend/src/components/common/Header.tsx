import styled from '@emotion/styled';
import React from 'react';
import palette from 'lib/styles/palette';
import Icon from 'lib/icon/Icon';
import { Desktop, formWidth, mediaQuery, Mobile } from 'lib/styles/common';
import CustomizedMenus from 'components/common/Menu';
import { ButtonProps, Menu, MenuProps, withStyles } from '@material-ui/core';
import { MenuItem as MaterialMenuItem } from '@material-ui/core';

const StyledMenu = withStyles({
  paper: {
    border: `1px solid ${palette.grey[2]}`,
    borderRadius: 1,
  },
  list: {
    color: palette.grey[4],
    padding: '6px 2px',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    variant="menu"
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    padding: '3px 10px',
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: palette.main[4],
      },
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: palette.main[4],
    },
  },
}))(MaterialMenuItem);

interface HeaderMenu {
  title: string;
  subTitle: null | Array<string>;
}

const headerMenu: Array<HeaderMenu> = [
  {
    title: '업체소개',
    subTitle: null,
  },
  {
    title: '냉장고',
    subTitle: ['냉장고', '김치 냉장고'],
  },
  {
    title: '에어컨',
    subTitle: ['벽걸이 에어컨', '스탠드 에어컨'],
  },
  {
    title: '세탁기',
    subTitle: null,
  },
  {
    title: 'TV',
    subTitle: null,
  },
  {
    title: '기타제품',
    subTitle: null,
  },
  {
    title: '자주묻는 질문',
    subTitle: null,
  },
];

function Header({ menuButtons }: any) {
  return (
    <Wrap>
      <Desktop>
        <img src="/img/logo.png" alt="logo" />
        <ElList>
          <menuButtons />
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

export default Header;
