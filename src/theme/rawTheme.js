import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import props from './props';
import shadows from './shadows';
import typography from './typography';
import spacing from './spacing';
import shape from './shape';

const rawTheme = createMuiTheme({
  palette,
  props,
  shadows,
  typography,
  spacing,
  shape,
});

export default rawTheme;
