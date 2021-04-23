const props = {
  MuiAppBar: { elevation: 1 },
  MuiButton: {
    disableElevation: true,
    disableRipple: true,
    type: 'button',
    variant: 'contained',
  },
  MuiCardHeader: {
    titleTypographyProps: { component: 'strong', variant: 'h6' },
  },
  MuiToolbar: { disableGutters: true },
};

export default props;
