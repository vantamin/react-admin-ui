import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Paper, PaperProps } from '@material-ui/core';

export interface CardProps extends PaperProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({ root: { boxShadow: theme.shadows[2] } })
);

const Card = ({ children, ...other }: CardProps) => {
  const classes = useStyles();

  return (
    <Paper classes={{ root: classes.root }} variant="outlined" {...other}>
      {children}
    </Paper>
  );
};

export default Card;
