export enum Cadence {
  daily = 'daily',
  weekly = 'weekly',
}

export enum Day {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}
export const DAYS: Day[] = [
  Day.Monday,
  Day.Tuesday,
  Day.Wednesday,
  Day.Thursday,
  Day.Friday,
  Day.Saturday,
  Day.Sunday,
];

export enum TimePeriod {
  AllDay = 'All Day',
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Night = 'Night',
}

export type HabitData = {
  name: string;
  cadence: Cadence;
  days: Record<Day, boolean>;
  timePeriod: TimePeriod;
};

export type Habit = HabitData & {
  id: string;
  owner: string;
};
