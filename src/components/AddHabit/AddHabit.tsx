import React, { useState } from 'react';
import { HabitData, EMPTY_HABIT_DATA } from 'modules/habits';
import HabitDetails from 'components/HabitDetails';

const AddHabit = () => {
  const [habit, setHabit] = useState<HabitData>(EMPTY_HABIT_DATA);
  return <HabitDetails habit={habit} setHabit={setHabit} />;
};

export default AddHabit;
