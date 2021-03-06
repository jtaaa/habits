import { useMemo } from 'react';
import useHabitLogs from './useHabitLogs';
import { getStatsFromLogs } from './utils';

const useHabitStats = (id: string) => {
  const { habitLogs, loading } = useHabitLogs(id);
  const stats = useMemo(
    () => (loading ? undefined : getStatsFromLogs(habitLogs)),
    [loading, habitLogs],
  );

  return stats;
};

export default useHabitStats;
