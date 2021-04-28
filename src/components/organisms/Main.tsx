import React, { Children } from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { flexGrow: 1 },
    content: { padding: theme.spacing(1) },
  })
);

const Main = ({ children, className }: Props) => {
  const classes = useStyles();

  if (Children.count(children) > 1) {
    return <main className={clsx(classes.root, className)}>{children}</main>;
  }

  return (
    <main className={clsx(classes.root, className)}>
      <article className={classes.content}>{children}</article>
    </main>
  );
};

export default Main;
