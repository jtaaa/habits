import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#fff',
    },
    text: {
      primary: 'rgb(30, 30, 30)',
      secondary: 'rgb(86, 86, 86)',
    },
    primary: {
      main: '#000',
    },
    secondary: {
      main: 'rgb(108, 108, 108)',
    },
    success: {
      main: '#2ed573',
    },
    error: {
      main: '#ff4757',
    },
  },
});

export default { ...theme, name: 'light' };
