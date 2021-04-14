import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      borderTop: `1px solid ${theme.palette.divider}`,
      textAlign: 'center',
      backgroundColor: theme.palette.common.white,
    },
    small: {
      fontSize: theme.typography.pxToRem(11),
    },
  })
);

const Footer = ({ children, className }: Props) => {
  const classes = useStyles();

  return (
    <footer className={clsx(classes.root, className)}>
      <Typography component="h2" variant="srOnly">
        서비스 이용정보
      </Typography>
      <Typography component="small" className={classes.small}>
        {children}
      </Typography>
    </footer>
  );
};

export default Footer;
