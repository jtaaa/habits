import {
  parse,
  differenceInCalendarDays,
  isSameDay,
  compareDesc,
} from 'date-fns';

export const getCompletionsFromHabitLogs = (
  habitLogs: Record<string, true>,
) => {
  const unsortedCompletions = Object.keys(habitLogs).map((completionString) =>
    parse(completionString, 'yyyy-MM-dd', new Date()),
  );
  return unsortedCompletions.sort(compareDesc);
};

const getStreak = (completions: Date[], startDate = new Date()) => {
  let streak = 0;
  let prevCompletion = startDate;

  for (const completion of completions) {
    if (
      differenceInCalendarDays(completion, prevCompletion) === -1 ||
      isSameDay(completion, prevCompletion)
    ) {
      streak++;
    } else {
      break;
    }
    prevCompletion = completion;
  }

  return streak;
};

const getMaxStreak = (completions: Date[]) => {
  let maxStreakSoFar = 0;

  while (completions.length !== 0) {
    const streak = getStreak(completions, completions[0]);
    completions = completions.slice(streak);
    if (streak > maxStreakSoFar) maxStreakSoFar = streak;
  }

  return maxStreakSoFar;
};

export const getStatsFromLogs = (habitLogs: Record<string, true>) => {
  const completions = getCompletionsFromHabitLogs(habitLogs);
  const totalCompletions = completions.length;
  const maxStreak = getMaxStreak(completions);
  const streak = getStreak(completions);

  return {
    totalCompletions,
    maxStreak,
    streak,
  };
};
