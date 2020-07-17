import firebase from 'firebase';
import { HabitData, Cadence, NO_DAYS, TimePeriod } from 'modules/habits';

export const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

export const RECORD_HABITS_HABIT: HabitData = {
  name: 'Record Habits',
  cadence: Cadence.daily,
  days: NO_DAYS,
  timePeriod: TimePeriod.AllDay,
};
