import { Habit, Cadence } from './types';
import { getDay } from 'utils/date';

export const isHabitActive = (habit: Habit | Omit<Habit, 'id'>, day?: Date) => {
  if (habit.cadence === Cadence.daily) return true;
  if (habit.days[getDay(day)]) return true;
  return false;
};
