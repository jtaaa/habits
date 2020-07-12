export enum CADENCES {
  daily = 'daily',
  weekly = 'weekly',
}

export type Habit = {
  id: string;
  name: string;
  cadence: CADENCES;
};
