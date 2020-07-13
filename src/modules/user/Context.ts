import { createContext } from 'react';

type IUserContext = {
  user: firebase.User | null;
  loading: boolean;
};
const UserContext = createContext<IUserContext>({ user: null, loading: true });

export default UserContext;
