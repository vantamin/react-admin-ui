import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Drawer, Toolbar } from '@material-ui/core';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => {
  const drawerWidth = 270;

  return createStyles({
    root: {
      width: drawerWidth,
      flexShrink: 0,
    },
    paper: {
      color: theme.palette.common.white,
      width: drawerWidth,
      overflow: 'auto',
      backgroundColor: '#263238',
    },
  });
});

const Nav = ({ children, className }: Props) => {
  const classes = useStyles();

  return (
    <Drawer
      classes={{ root: classes.root, paper: classes.paper }}
      className={className}
      PaperProps={{ component: 'nav' }}
      variant="permanent"
    >
      <Toolbar />
      {children}
    </Drawer>
  );
};

export default Nav;
