import { useState, useContext, useEffect, useMemo } from 'react';
import { FirebaseContext } from 'modules/firebase';
import { UserContext } from 'modules/user';
import { getDateId } from 'utils/date';
import { Log } from './types';

const useLog = () => {
  const { firestore } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  if (!user) throw new Error('Cannot useLog when not signed in.');

  const [log, setLog] = useState<Log>({});

  const logRef = useMemo(() => {
    const dateId = getDateId(new Date());
    const logCollection = firestore
      .collection('users')
      .doc(user.uid)
      .collection('logs');
    return logCollection.doc(dateId);
  }, [firestore]);

  useEffect(() => {
    const getLog = async () => {
      const logDoc = await logRef.get();
      setLog(logDoc.data() ?? {});
    };
    getLog();
  }, [logRef]);

  const toggle = async (id: string) => {
    setLog((log) => ({ ...log, [id]: !log[id] }));
    await logRef.set({ [id]: !log[id] }, { merge: true });
  };

  return { log, toggle };
};

export default useLog;
