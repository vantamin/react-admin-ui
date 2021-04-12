import rawTheme from './rawTheme';
import overrides from './overrides';

const theme = {
  ...rawTheme,
  overrides: overrides(rawTheme),
};

export default theme;
