import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from 'components/common/Button';
import Icon from 'lib/icon/Icon';
import { Drawer } from '@material-ui/core';
import styled from '@emotion/styled';
import HeaderContainer from 'containers/common/HeaderContainer';

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.up('lg')]: {
      width: '20%',
    },
    width: '90%',
  },
  list: {},
  fullList: {
    width: 'auto',
  },
}));

export default function MobileMainMenu({ toggleDrawer, state }: any) {
  const classes = useStyles();

  const list = () => (
    <div>
      <ListStyles>
        <Button iconOnly variant="text" onClick={toggleDrawer(false)}>
          <Icon icon="close" />
        </Button>
        <HeaderContainer />
      </ListStyles>
      {/* <MainSideMenu /> */}
    </div>
  );

  return (
    <div>
      <Button variant="text" onClick={toggleDrawer(true)} iconOnly>
        <Icon icon={'menu'} />
      </Button>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor={'right'}
        open={state}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}

const ListStyles = styled.div`
  text-align: right;
`;
