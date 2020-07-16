import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from 'modules/firebase';
import { UserContext } from 'modules/user';
import { TODAY } from 'utils/date';
import { Habit } from './types';
import { isHabitActive } from './utils';

const useHabits = (date = TODAY) => {
  const { firestore } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  if (!user) throw new Error('Cannot useHabits when not signed in.');

  const [habits, setHabits] = useState<Habit[]>([]);
  const [activeHabits, setActiveHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const habitsCollection = firestore
      .collection('habits')
      .where('owner', '==', user.uid);

    const getHabits = async () => {
      setLoading(true);
      const habitsSnapshot = await habitsCollection.get();
      const habits: Habit[] = [];
      const activeHabits: Habit[] = [];
      habitsSnapshot.forEach((habitSnapshot) => {
        const habit = {
          ...(habitSnapshot.data() as Omit<Habit, 'id'>),
          id: habitSnapshot.id,
        };
        if (isHabitActive(habit, date)) {
          activeHabits.push(habit);
        }
        habits.push(habit);
      });
      setHabits(habits);
      setActiveHabits(activeHabits);
      setLoading(false);
    };
    getHabits();
  }, [firestore, user.uid, date]);

  return { habits, activeHabits, loading };
};

export default useHabits;
