import React, { useState } from 'react';
import { Habit, CADENCE, ALL_DAYS } from 'modules/habits';
import HabitDetails from 'components/HabitDetails';

const AddHabit = () => {
  const [habit, setHabit] = useState<Habit>({
    name: '',
    cadence: CADENCE.daily,
    id: '',
    days: ALL_DAYS,
  });
  return <HabitDetails habit={habit} setHabit={setHabit} />;
};

export default AddHabit;
