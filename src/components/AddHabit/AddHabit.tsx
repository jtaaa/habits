import React, { useState } from 'react';
import { Habit, CADENCE, NO_DAYS } from 'modules/habits';
import HabitDetails from 'components/HabitDetails';

const AddHabit = () => {
  const [habit, setHabit] = useState<Habit>({
    name: '',
    cadence: CADENCE.daily,
    id: '',
    days: NO_DAYS,
  });
  return <HabitDetails habit={habit} setHabit={setHabit} />;
};

export default AddHabit;
