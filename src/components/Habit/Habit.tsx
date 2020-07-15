import React from 'react';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import HabitDetails from 'components/HabitDetails';
import HabitStats from 'components/HabitStats';
import { useHabit, HabitData } from 'modules/habits';

type Params = {
  id: string;
};

const Habit: React.FC = () => {
  const { id } = useParams<Params>();
  const { habit, setHabit, loading } = useHabit(id);

  const setHabitData = (habitData: HabitData) => {
    setHabit((habit) => ({ ...habit, ...habitData }));
  };

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <div>
      <HabitDetails habit={habit} setHabit={setHabitData} />
      <HabitStats id={habit.id} />
    </div>
  );
};

export default Habit;
