import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Footer, Header, Main, Nav } from 'components/organisms';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: '1 1 0%',
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
    },
    container: {
      display: 'flex',
      flexGrow: 1,
    },
    content: {
      flex: '1 1 0%',
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

const DefaultLayout = ({ children, className }: Props) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Header />
      <div className={classes.container}>
        <Nav />
        <div className={classes.content}>
          <Main>{children}</Main>
          <Footer>© 2021.</Footer>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
