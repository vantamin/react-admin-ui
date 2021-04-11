import React from 'react';
import clsx from 'clsx';
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  className?: string;
}

const styles = (theme: Theme) => ({ root: {} });

const Card = (props: Props) => {
  const { children, classes, className, ...other } = props;

  return (
    <Paper
      className={clsx(classes.root, className)}
      variant="outlined"
      {...other}
    >
      {children}
    </Paper>
  );
};

export default withStyles(styles)(Card);
