import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseContext, firebase } from 'modules/firebase';
import { ThemeContextProvider, ThemeProvider } from 'utils/theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      <ThemeContextProvider>
        <ThemeProvider>
          <Router>{children}</Router>
        </ThemeProvider>
      </ThemeContextProvider>
    </FirebaseContext.Provider>
  );
};

export default AppProvider;
