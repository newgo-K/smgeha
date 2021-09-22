import palette from 'lib/styles/palette';
import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    md: false;
    xl: false;
  }
}

const theme = createMuiTheme({
  props: {
    MuiTypography: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        subtitle1: 's1',
        subtitle2: 's2',
        body1: 'b1',
        body2: 'b2',
      },
    },
  },
});

const initTheme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'Noto Sans KR', 'sans-serif'].join(','),
    h1: {
      fontSize: 20,
      fontWeight: 700,
      [theme.breakpoints.down('lg')]: {
        fontSize: 24,
        fontWeight: 700,
      },
    },
    h2: {
      fontSize: 18,
      fontWeight: 500,
      [theme.breakpoints.down('lg')]: {
        fontSize: 18,
        fontWeight: 700,
      },
    },
    h3: {
      fontSize: 16,
      fontWeight: 400,
      [theme.breakpoints.down('lg')]: {
        fontSize: 16,
        fontWeight: 500,
      },
    },
    h4: {
      fontSize: 15,
      fontWeight: 500,
      [theme.breakpoints.down('lg')]: {
        fontSize: 15,
        fontWeight: 500,
      },
    },
    subtitle1: {
      fontSize: 15,
      fontWeight: 400,
      [theme.breakpoints.down('lg')]: {
        fontSize: 15,
        fontWeight: 500,
      },
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 400,
      [theme.breakpoints.down('lg')]: {
        fontSize: 14,
        fontWeight: 500,
      },
    },
    body1: {
      fontSize: 12,
      fontWeight: 400,
      [theme.breakpoints.down('lg')]: {
        fontSize: 13,
        fontWeight: 400,
      },
    },
    body2: {
      fontSize: 11,
      fontWeight: 400,
      [theme.breakpoints.down('lg')]: {
        fontSize: 13,
        fontWeight: 500,
      },
    },
  },

  palette: {
    primary: {
      main: palette.main[4],
    },
  },
  //   components: {
  //     MuiButtonBase: {
  //       defaultProps: {
  //         disableRipple: true,
  //       },
  //     },
  //     MuiTab: {
  //       defaultProps: {
  //         disableRipple: true,
  //       },
  //     },
  //   },
});

export default initTheme;
