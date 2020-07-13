import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContext, firebase } from 'modules/firebase';
import { ThemeContextProvider, ThemeProvider } from 'utils/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { UserProvider } from 'modules/user';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      <UserProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <CssBaseline />
            <Router>{children}</Router>
          </ThemeProvider>
        </ThemeContextProvider>
      </UserProvider>
    </FirebaseContext.Provider>
  );
};

export default AppProvider;
