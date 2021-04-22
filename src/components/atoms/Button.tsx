import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@material-ui/core';

export type ColorTypes = 'primary' | 'secondary' | 'info' | 'success';

export interface ButtonProps
  extends Omit<
    MuiButtonProps,
    | 'color'
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
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: ColorTypes;
}

const useColors = (color?: ColorTypes) => {
  switch (color) {
    case 'primary':
    case 'secondary':
      return color;
    default:
      return undefined;
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    primary: {},
    secondary: {},
    info: {
      color: theme.palette.info.contrastText,
      borderColor: 'transparent',
      backgroundColor: theme.palette.info.main,
      '&:hover': {
        backgroundColor: theme.palette.info.main,
      },
    },
    success: {
      color: theme.palette.info.contrastText,
      borderColor: 'transparent',
      backgroundColor: theme.palette.success.main,
      '&:hover': {
        backgroundColor: theme.palette.info.main,
      },
    },
  })
);

const Button = ({ children, className, color, ...other }: ButtonProps) => {
  const classes = useStyles();
  const colorName = color ? classes[color] : undefined;

  return (
    <MuiButton
      classes={{ root: classes.root }}
      className={clsx(className, colorName)}
      color={useColors(color)}
      {...other}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
