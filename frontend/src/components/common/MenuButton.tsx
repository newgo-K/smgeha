import palette from 'lib/styles/palette';
import React from 'react';
import styled from '@emotion/styled';
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

function MenuButton({
  anchorEl,
  handleClick,
  handleClose,
  title,
  subTitle,
}: any) {
  return (
    <>
      {subTitle ? (
        <li>
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
        </li>
      ) : (
        <li>
          <ButtonStyles variant="text">{title}</ButtonStyles>
        </li>
      )}
    </>
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

export default MenuButton;
