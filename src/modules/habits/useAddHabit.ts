import { useContext } from 'react';
import { FirebaseContext } from 'modules/firebase';
import { HabitData } from './types';
import { UserContext } from 'modules/user';

const useAddHabit = () => {
  const { firestore } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);
  if (!user) throw new Error('Cannot useAddHabit when not signed in.');

  const habitsCollection = firestore.collection('habits');

  const addHabit = async (habit: HabitData) => {
    await habitsCollection.add({ ...habit, owner: user.uid });
  };

  return addHabit;
};

export default useAddHabit;
