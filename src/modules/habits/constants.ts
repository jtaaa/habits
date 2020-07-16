import { Day, Cadence, Habit, HabitData, TimePeriod } from './types';

export const ALL_DAYS = {
  [Day.Monday]: true,
  [Day.Tuesday]: true,
  [Day.Wednesday]: true,
  [Day.Thursday]: true,
  [Day.Friday]: true,
  [Day.Saturday]: true,
  [Day.Sunday]: true,
};

export const NO_DAYS = {
  [Day.Monday]: false,
  [Day.Tuesday]: false,
  [Day.Wednesday]: false,
  [Day.Thursday]: false,
  [Day.Friday]: false,
  [Day.Saturday]: false,
  [Day.Sunday]: false,
};

export const EMPTY_HABIT_DATA: HabitData = {
  name: '',
  cadence: Cadence.daily,
  days: NO_DAYS,
  timePeriod: TimePeriod.AllDay,
};

export const EMPTY_HABIT: Habit = {
  ...EMPTY_HABIT_DATA,
  id: '',
  owner: '',
};
