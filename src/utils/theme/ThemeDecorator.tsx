import React from 'react';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './GlobalStyle';
import defaultTheme from './default';

type ThemeDecoratorProps = {
  children: React.ReactNode;
};
const ThemeDecorator = ({ children }: ThemeDecoratorProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default ThemeDecorator;
