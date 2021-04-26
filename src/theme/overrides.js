const overrides = (theme) => {
  const padding = `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(
    14
  )}`;

  const border = '1px solid transparent';

  return {
    MuiAppBar: {
      root: { zIndex: theme.zIndex.drawer + 1 },
      colorPrimary: { backgroundColor: theme.palette.slate.main },
    },
    MuiButton: {
      root: {
        padding,
        border,
        '&:hover': { backgroundColor: undefined },
      },
      contained: {
        color: undefined,
        borderColor: theme.palette.divider,
        backgroundColor: theme.palette.grey[50],
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
        },
        '&:active': { boxShadow: undefined },
      },
      containedPrimary: {
        borderColor: 'transparent',
        '&:hover': {
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.primary.main,
        },
      },
      containedSecondary: {
        borderColor: 'transparent',
        '&:hover': {
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.secondary.main,
        },
      },
      disabled: {
        borderColor: theme.palette.divider,
      },
      colorInherit: {
        color: undefined,
        borderColor: undefined,
      },
    },
    MuiCardContent: {
      root: {
        padding: theme.spacing(1),
        '&:last-child': undefined,
      },
    },
    MuiCardHeader: {
      root: {
        padding: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      avatar: {
        marginRight: theme.spacing(1),
      },
      action: {
        alignSelf: 'center',
        marginTop: undefined,
        marginRight: undefined,
      },
    },
    MuiIconButton: {
      root: {
        padding: 5.5,
        '&:hover': { backgroundColor: theme.palette.grey[100] },
      },
    },
  };
};

export default overrides;
