import React, { useState } from 'react';
import { Habit, CADENCES } from 'modules/habits';
import HabitDetails from 'components/HabitDetails';

const AddHabit = () => {
  const [habit, setHabit] = useState<Habit>({
    name: '',
    cadence: CADENCES.daily,
    id: '',
  });
  return <HabitDetails habit={habit} setHabit={setHabit} />;
};

export default AddHabit;
