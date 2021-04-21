import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';

export interface ButtonProps
  extends Omit<
    MuiButtonProps,
    | 'disableElevation'
    | 'disableFocusRipple'
    | 'href'
    | 'size'
    | 'variant'
    | 'action'
    | 'centerRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'focusVisibleClassName'
    | 'onFocusVisible'
    | 'TouchRippleProps'
  > {
  color?: 'primary' | 'secondary';
}

const useStyles = makeStyles<Theme>((theme) => createStyles({ root: {} }));

const Button = ({ children, ...other }: ButtonProps) => {
  const classes = useStyles();

  return (
    <MuiButton classes={{ root: classes.root }} {...other}>
      {children}
    </MuiButton>
  );
};

export default Button;
