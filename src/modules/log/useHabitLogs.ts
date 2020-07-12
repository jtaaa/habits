import { useMemo, useContext, useState, useEffect } from 'react';
import { FirebaseContext } from 'modules/firebase';

const useHabitLogs = (id: string) => {
  const [habitLogs, setHabitLogs] = useState<Record<string, boolean>>({});
  const { firestore } = useContext(FirebaseContext);
  const logsRef = useMemo(() => {
    const logsQuery = firestore.collection('logs').where(id, '==', true);
    return logsQuery;
  }, [firestore, id]);

  useEffect(() => {
    const getHabitLogs = async () => {
      const habitLogsSnapshot = await logsRef.get();
      const habitLogs: Record<string, boolean> = {};
      habitLogsSnapshot.forEach((habitLogSnapshot) => {
        habitLogs[habitLogSnapshot.id] = true;
      });
      setHabitLogs(habitLogs);
    };
    getHabitLogs();
  }, [logsRef]);

  return habitLogs;
};

export default useHabitLogs;
