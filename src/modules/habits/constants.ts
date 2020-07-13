import { DAY, CADENCE, Habit, HabitData } from './types';

export const ALL_DAYS = {
  [DAY.Monday]: true,
  [DAY.Tuesday]: true,
  [DAY.Wednesday]: true,
  [DAY.Thursday]: true,
  [DAY.Friday]: true,
  [DAY.Saturday]: true,
  [DAY.Sunday]: true,
};

export const NO_DAYS = {
  [DAY.Monday]: false,
  [DAY.Tuesday]: false,
  [DAY.Wednesday]: false,
  [DAY.Thursday]: false,
  [DAY.Friday]: false,
  [DAY.Saturday]: false,
  [DAY.Sunday]: false,
};

export const EMPTY_HABIT_DATA: HabitData = {
  name: '',
  cadence: CADENCE.daily,
  days: NO_DAYS,
};

export const EMPTY_HABIT: Habit = {
  ...EMPTY_HABIT_DATA,
  id: '',
  owner: '',
};
