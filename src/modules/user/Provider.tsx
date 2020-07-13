import React, { useState, useEffect, useContext } from 'react';
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
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
