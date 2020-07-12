export enum CADENCE {
  daily = 'daily',
  weekly = 'weekly',
}

export enum DAY {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}
export const DAYS: DAY[] = [
  DAY.Monday,
  DAY.Tuesday,
  DAY.Wednesday,
  DAY.Thursday,
  DAY.Friday,
  DAY.Saturday,
  DAY.Sunday,
];

export type Habit = {
  id: string;
  name: string;
  cadence: CADENCE;
  days: Record<DAY, boolean>;
};
