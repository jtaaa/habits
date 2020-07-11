import React from 'react';
import { FirebaseContext, firebase } from 'modules/firebase';

const AppProvider: React.FC = ({ children }) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AppProvider;
