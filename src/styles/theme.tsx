import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: { text: { primary: '#333' } },
  overrides: {
    MuiButton: {
      root: {
        padding: '.4375rem .875rem',
      },
      contained: {
        color: undefined,
        border: '1px solid #ddd',
        boxShadow: undefined,
        backgroundColor: '#fafafa',
        '&:hover': {
          boxShadow: undefined,
          backgroundColor: '#f5f5f5',
        },
        '&:active': {
          boxShadow: undefined,
        },
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
      disableFocusRipple: true,
      disableRipple: true,
      variant: 'contained',
    },
  },
  typography: {
    fontSize: 13,
    button: {
      lineHeight: 1.5385,
    },
  },
  shape: {
    borderRadius: 3,
  },
});

export default theme;
