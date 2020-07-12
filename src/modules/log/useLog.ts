import { useState, useContext, useEffect, useMemo } from 'react';
import { FirebaseContext } from 'modules/firebase';
import getDateId from 'utils/getDateId';
import { Log } from './types';

const useLog = () => {
  const [log, setLog] = useState<Log>({});
  const { firestore } = useContext(FirebaseContext);
  const logRef = useMemo(() => {
    const dateId = getDateId();
    const logCollection = firestore.collection('logs');
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
