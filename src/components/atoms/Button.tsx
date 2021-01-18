import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Button as MuiButton } from '@material-ui/core';
import theme from 'styles/theme';

export interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton>{children}</MuiButton>
    </ThemeProvider>
  );
};

export default Button;
