import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MuiTabs from '@material-ui/core/Tabs';
import MuiTab from '@mui/material/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { css } from '@emotion/react';
import palette from 'lib/styles/palette';
import { withStyles } from '@material-ui/styles';
import { NONAME } from 'dns';
import { ButtonBase } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    fontSize: '14px',
    fontWeight: 400,
    margin: 100,
  },
}));

const Tab = withStyles({
  root: {
    margin: '0 10px',
    backgroundColor: palette.grey[1], //!important,
    minWidth: '130px',
    padding: 0,
    minHeight: 35,
  },
})(MuiTab);

const Tabs = withStyles({
  root: { minHeight: 35 },
})(MuiTabs);

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <ButtonBase>asdf</ButtonBase>
      <AppBar
        css={css`
          background-color: white !important;
        `}
        position="static"
        color="default"
        elevation={0}
      >
        <Tabs
          css={css`
            .Mui-selected {
              background-color: white;
            }
          `}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="매입" {...a11yProps(0)} />
          <Tab label="판매" {...a11yProps(1)} />
          <Tab label="냉장고" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
