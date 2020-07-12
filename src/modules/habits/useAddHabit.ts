import { useContext } from 'react';
import { FirebaseContext } from 'modules/firebase';
import { Habit } from './types';

const useAddHabit = () => {
  const { firestore } = useContext(FirebaseContext);
  const habitsCollection = firestore.collection('habits');

  const addHabit = async (habit: Omit<Habit, 'id'>) => {
    await habitsCollection.add(habit);
  };

  return addHabit;
};

export default useAddHabit;
