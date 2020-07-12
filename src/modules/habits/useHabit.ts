import { useState, useMemo, useContext, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';
import { FirebaseContext } from 'modules/firebase';
import { Habit } from './types';

const SYNC_DEBOUNCE_WAIT = 300;

const useHabit = (id: string) => {
  const [habit, setHabit] = useState<Habit>();
  const { firestore } = useContext(FirebaseContext);
  const habitRef = useMemo(() => {
    const habitsCollection = firestore.collection('/habits');
    return habitsCollection.doc(id);
  }, [firestore, id]);

  useEffect(() => {
    const getHabit = async () => {
      const habitDoc = await habitRef.get();
      setHabit({ ...(habitDoc.data() as Omit<Habit, 'id'>), id: habitDoc.id });
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
    if (!habit) return;
    syncHabitToFirebase(habit);
  }, [habit, syncHabitToFirebase]);

  return { habit, setHabit };
};

export default useHabit;
