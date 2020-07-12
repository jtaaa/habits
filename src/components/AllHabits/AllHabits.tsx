import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Typography,
} from '@material-ui/core';
import HabitChecker from 'components/HabitChecker';
import { useHabits } from 'modules/habits';

const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    allHabits: {
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

const AllHabits: React.FC<Props> = ({ classes }) => {
  const { habits } = useHabits();
  return (
    <div className={classes.allHabits}>
      {habits.length !== 0 ? (
        <div className={classes.habits}>
          {habits.map((habit) => (
            <div key={habit.id} className={classes.habit}>
              <HabitChecker habit={habit} />
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.habitsNone}>
          <Typography align="center">No habits</Typography>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(AllHabits);
