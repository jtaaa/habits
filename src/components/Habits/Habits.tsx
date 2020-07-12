import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';
import { useHabits } from 'modules/habits';
import Checker from './Checker';

const styles = ({ spacing }: Theme) =>
  createStyles({
    habits: {
      padding: spacing(3),
    },
    habit: {
      marginBottom: spacing(1),
    },
  });

type Props = WithStyles<typeof styles>;

const Habits: React.FC<Props> = ({ classes }) => {
  const habits = useHabits();

  return (
    <div className={classes.habits}>
      {habits.map((habit, index) => (
        <div key={habit.id} className={classes.habit}>
          <Checker habit={habit} done={index === 0} />
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Habits);
