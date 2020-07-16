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
import Progress from './Progress';
import Footer from './Footer';

const styles = ({ spacing }: Theme) =>
  createStyles({
    container: {
      padding: spacing(3),
      paddingTop: 0,
    },
    habitsNone: {
      paddingBottom: spacing(3),
    },
  });

type Props = WithStyles<typeof styles> & {
  date?: Date;
};

const Habits: React.FC<Props> = ({ classes, date }) => {
  const { activeHabits, loading } = useHabits(date);
  const { log, toggle } = useLog(date);

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

  const completionCount = Object.values(log).filter(Boolean).length;
  const percentCompleted = (completionCount / activeHabits.length) * 100;

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <div className={classes.container}>
      <Progress percentCompleted={percentCompleted} />
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
      <Footer date={date} />
    </div>
  );
};

export default withStyles(styles)(Habits);
