import { useMemo, useContext, useState, useEffect } from 'react';
import { FirebaseContext } from 'modules/firebase';
import { UserContext } from 'modules/user';

const useHabitLogs = (id: string) => {
  const { firestore } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  if (!user) throw new Error('Cannot useLog when not signed in.');

  const [habitLogs, setHabitLogs] = useState<Record<string, true>>({});
  const [loading, setLoading] = useState(true);

  const logsRef = useMemo(() => {
    const logsQuery = firestore
      .collection('users')
      .doc(user.uid)
      .collection('logs')
      .where(id, '==', true);
    return logsQuery;
  }, [firestore, id, user.uid]);

  useEffect(() => {
    const getHabitLogs = async () => {
      setLoading(true);
      const habitLogsSnapshot = await logsRef.get();
      const habitLogs: Record<string, true> = {};
      habitLogsSnapshot.forEach((habitLogSnapshot) => {
        habitLogs[habitLogSnapshot.id] = true;
      });
      setHabitLogs(habitLogs);
      setLoading(false);
    };
    getHabitLogs();
  }, [logsRef]);

  return { habitLogs, loading };
};

export default useHabitLogs;
