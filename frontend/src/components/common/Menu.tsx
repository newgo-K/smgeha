import React, { useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from 'components/common/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import { MenuItem as MaterialMenuItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import { css } from '@mui/styled-engine';
import palette from 'lib/styles/palette';
import styled from '@emotion/styled';

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

export const MenuItem = ({ text, onClick }: any) => {
  return (
    <StyledMenuItem disableRipple disableTouchRipple>
      <ListItemText primary={text} onClick={onClick} />
    </StyledMenuItem>
  );
};

const test: Array<any> = [
  {
    anchorEl: null,
    title: '업체소개',
    subTitle: undefined,
  },
  {
    anchorEl: null,
    title: '냉장고',
    subTitle: ['냉장고', '김치 냉장고'],
  },
  {
    anchorEl: null,
    title: '에어컨',
    subTitle: ['벽걸이 에어컨', '스탠드 에어컨'],
  },
  {
    anchorEl: null,
    title: '세탁기',
    subTitle: null,
  },
  {
    anchorEl: null,
    title: 'TV',
    subTitle: null,
  },
  {
    anchorEl: null,
    title: '기타제품',
    subTitle: null,
  },
  {
    title: '자주묻는 질문',
    subTitle: null,
  },
];

const Ttt = ({ title, subTitle }: any) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      {subTitle ? (
        <div>
          <ButtonStyles
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="text"
            onClick={handleClick}
          >
            {title}
          </ButtonStyles>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {subTitle.map((t: any) => (
              <MenuItem onClick={handleClose} text={t} />
            ))}
          </StyledMenu>
        </div>
      ) : (
        <div>
          <ButtonStyles variant="text">{title}</ButtonStyles>
        </div>
      )}
    </>
  );
};

export default function CustomizedMenus() {
  return (
    <ElList>
      {test.map((t: any, key: any) => (
        <li>
          <Ttt title={t.title} subTitle={t.subTitle} />
        </li>
      ))}
    </ElList>
  );
}

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
