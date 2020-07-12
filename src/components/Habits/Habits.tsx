import React from 'react';
import { Link } from 'react-router-dom';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Button,
  Typography,
} from '@material-ui/core';
import HabitChecker from 'components/HabitChecker';
import { useHabits } from 'modules/habits';
import { useLog } from 'modules/log';
import LINKS from 'utils/links';

const styles = ({ spacing }: Theme) =>
  createStyles({
    habits: {
      padding: spacing(3),
    },
    habit: {
      marginBottom: spacing(1),
    },
    habitsNone: {
      paddingBottom: spacing(3),
    },
  });

type Props = WithStyles<typeof styles>;

const Habits: React.FC<Props> = ({ classes }) => {
  const { activeHabits } = useHabits();
  const { log, toggle } = useLog();

  return (
    <div className={classes.habits}>
      {activeHabits.map((habit) => (
        <div key={habit.id} className={classes.habit}>
          <HabitChecker
            habit={habit}
            done={log[habit.id]}
            onDone={() => toggle(habit.id)}
          />
        </div>
      ))}
      {activeHabits.length === 0 && (
        <div className={classes.habitsNone}>
          <Typography align="center">No active habits</Typography>
        </div>
      )}
      <Button component={Link} to={LINKS.ALL} variant="text">
        All habits
      </Button>
    </div>
  );
};

export default withStyles(styles)(Habits);
