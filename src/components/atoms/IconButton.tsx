import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from '@material-ui/core';

export interface IconButtonProps extends MuiIconButtonProps {}

const useStyles = makeStyles((theme: Theme) => createStyles({ root: {} }));

const IconButton = ({ ...other }: IconButtonProps) => {
  const classes = useStyles();

  return <MuiIconButton classes={{ root: classes.root }} {...other} />;
};

export default IconButton;
