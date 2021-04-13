import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({ root: {} }));

const Header = ({ children, className }: Props) => {
  const classes = useStyles();

  return (
    <AppBar
      classes={{ root: classes.root }}
      className={className}
      position="relative"
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};

export default Header;
