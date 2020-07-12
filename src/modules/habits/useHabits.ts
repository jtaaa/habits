import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from 'modules/firebase';
import { Habit } from './types';
import { isHabitActive } from './utils';

const useHabits = () => {
  const { firestore } = useContext(FirebaseContext);
  const [habits, setHabits] = useState<Habit[]>([]);
  const [activeHabits, setActiveHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const habitsCollection = firestore.collection('habits');

    const getHabits = async () => {
      const habitsSnapshot = await habitsCollection.get();
      const habits: Habit[] = [];
      const activeHabits: Habit[] = [];
      habitsSnapshot.forEach((habitSnapshot) => {
        const habit = {
          ...(habitSnapshot.data() as Omit<Habit, 'id'>),
          id: habitSnapshot.id,
        };
        if (isHabitActive(habit)) {
          activeHabits.push(habit);
        }
        habits.push(habit);
      });
      setHabits(habits);
      setActiveHabits(activeHabits);
    };
    getHabits();
  }, [firestore]);

  return { habits, activeHabits };
};

export default useHabits;
