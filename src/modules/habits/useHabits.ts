import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from 'modules/firebase';
import { Habit } from './types';

const useHabits = () => {
  const { firestore } = useContext(FirebaseContext);
  const habitsCollection = firestore.collection('habits');

  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    const getHabits = async () => {
      const habitsSnapshot = await habitsCollection.get();
      const habits: Habit[] = [];
      habitsSnapshot.forEach((habitSnapshot) => {
        habits.push({
          ...(habitSnapshot.data() as Omit<Habit, 'id'>),
          id: habitSnapshot.id,
        });
      });
      setHabits(habits);
    };
    getHabits();
  }, [habitsCollection]);

  return habits;
};

export default useHabits;
