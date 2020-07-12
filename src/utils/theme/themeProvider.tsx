import React, { useContext } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from './state';

const CustomThemeProvider: React.FC = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
