import { Theme, withStyles } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';

const styles = (theme: Theme) => ({
  root: { padding: theme.spacing(1) },
});

export default withStyles(styles)(CardHeader);
