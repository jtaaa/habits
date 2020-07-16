import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  Typography,
  withStyles,
} from '@material-ui/core';
import HabitChecker from 'components/HabitChecker';
import { Habit } from 'modules/habits';

const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    container: {
      marginBottom: spacing(2),
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
  });

type Props = WithStyles<typeof styles> & {
  title: string;
  habits: Habit[];
  log: Record<string, boolean>;
  toggle: (id: string) => void;
};

const HabitGroup: React.FC<Props> = ({
  classes,
  title,
  habits,
  log,
  toggle,
}) => {
  if (habits.length === 0) {
    return null;
  }

  return (
    <div className={classes.container}>
      <Typography variant="overline">{title}</Typography>
      <div className={classes.habits}>
        {habits.map((habit) => (
          <div key={habit.id} className={classes.habit}>
            <HabitChecker
              habit={habit}
              done={log[habit.id]}
              onDone={() => toggle(habit.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(HabitGroup);
