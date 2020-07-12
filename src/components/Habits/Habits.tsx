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
import HabitChecker from 'components/HabitChecker';
import { useHabits } from 'modules/habits';
import { useLog } from 'modules/log';
import LINKS from 'utils/links';

const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    container: {
      padding: spacing(3),
    },
    habits: {
      [breakpoints.up('sm')]: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridColumnGap: spacing(1),
      },
      [breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
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
  const { activeHabits, loading } = useHabits();
  const { log, toggle } = useLog();

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <div className={classes.container}>
      {activeHabits.length !== 0 ? (
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
        </div>
      ) : (
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
