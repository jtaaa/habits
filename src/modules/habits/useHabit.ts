import { useState, useMemo, useContext, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { FirebaseContext } from 'modules/firebase';
import { Habit } from './types';
import { EMPTY_HABIT } from './constants';

const SYNC_DEBOUNCE_WAIT = 300;

const useHabit = (id: string) => {
  const { firestore } = useContext(FirebaseContext);

  const [habit, setHabit] = useState(EMPTY_HABIT);
  const [loading, setLoading] = useState(true);

  const habitRef = useMemo(() => {
    const habitsCollection = firestore.collection('/habits');
    return habitsCollection.doc(id);
  }, [firestore, id]);

  useEffect(() => {
    const getHabit = async () => {
      setLoading(true);
      const habitDoc = await habitRef.get();
      setHabit({ ...(habitDoc.data() as Omit<Habit, 'id'>), id: habitDoc.id });
      setLoading(false);
    };
    getHabit();
  }, [habitRef]);

  const syncHabitToFirebase = useCallback(
    debounce(async (habit: Habit) => {
      await habitRef.update(habit);
    }, SYNC_DEBOUNCE_WAIT),
    [habitRef],
  );
  useEffect(() => {
    if (loading) return;
    syncHabitToFirebase(habit);
  }, [habit, syncHabitToFirebase, loading]);

  return { habit, setHabit, loading };
};

export default useHabit;
