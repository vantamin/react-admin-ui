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
  MuiIconButton: { disableRipple: true },
  MuiToolbar: { disableGutters: true },
};

export default props;
