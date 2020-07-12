import React from 'react';
import { FirebaseContext, firebase } from 'modules/firebase';
import { ThemeContextProvider, ThemeProvider } from 'utils/theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      <ThemeContextProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ThemeContextProvider>
    </FirebaseContext.Provider>
  );
};

export default AppProvider;
