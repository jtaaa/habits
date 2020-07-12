import { Habit, CADENCE } from './types';
import { getDay } from 'utils/date';

export const isHabitActive = (habit: Habit | Omit<Habit, 'id'>) => {
  if (habit.cadence === CADENCE.daily) return true;
  if (habit.days[getDay()]) return true;
  return false;
};
