import React, { useState, useEffect, useContext } from 'react';
import { LinearProgress } from '@material-ui/core';
import { FirebaseContext } from 'modules/firebase';
import UserContext from './Context';

const UserProvider: React.FC = ({ children }) => {
  const { auth } = useContext(FirebaseContext);
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {loading ? <LinearProgress /> : children}
    </UserContext.Provider>
  );
};
export default UserProvider;
