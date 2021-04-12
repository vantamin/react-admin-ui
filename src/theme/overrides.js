const overrides = (theme) => {
  const padding = `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(
    14
  )}`;

  const border = '1px solid transparent';

  return {
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
        '&:hover': { backgroundColor: theme.palette.grey[100] },
      },
    },
  };
};

export default overrides;
