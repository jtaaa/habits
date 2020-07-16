import React from 'react';
import { Link } from 'react-router-dom';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Button,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import { useHabits, TimePeriod } from 'modules/habits';
import { useLog } from 'modules/log';
import LINKS from 'utils/links';
import HabitGroup from './HabitGroup';

const styles = ({ spacing }: Theme) =>
  createStyles({
    container: {
      padding: spacing(3),
    },
    habitsNone: {
      paddingBottom: spacing(3),
    },
  });

type Props = WithStyles<typeof styles>;

const Habits: React.FC<Props> = ({ classes }) => {
  const { activeHabits, loading } = useHabits();
  const { log, toggle } = useLog();

  const allDayHabits = activeHabits.filter(
    (habit) => habit.timePeriod === TimePeriod.AllDay,
  );
  const morningHabits = activeHabits.filter(
    (habit) => habit.timePeriod === TimePeriod.Morning,
  );
  const afternoonHabits = activeHabits.filter(
    (habit) => habit.timePeriod === TimePeriod.Afternoon,
  );
  const nightHabits = activeHabits.filter(
    (habit) => habit.timePeriod === TimePeriod.Night,
  );

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <div className={classes.container}>
      {activeHabits.length === 0 && (
        <div className={classes.habitsNone}>
          <Typography align="center">No active habits</Typography>
        </div>
      )}
      <HabitGroup
        title="all day"
        habits={allDayHabits}
        log={log}
        toggle={toggle}
      />
      <HabitGroup
        title="morning"
        habits={morningHabits}
        log={log}
        toggle={toggle}
      />
      <HabitGroup
        title="afternoon"
        habits={afternoonHabits}
        log={log}
        toggle={toggle}
      />
      <HabitGroup
        title="night"
        habits={nightHabits}
        log={log}
        toggle={toggle}
      />
      <Button component={Link} to={LINKS.ALL} variant="text">
        All habits
      </Button>
    </div>
  );
};

export default withStyles(styles)(Habits);
