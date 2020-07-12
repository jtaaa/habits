import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';
import { useHabits } from 'modules/habits';
import { useLog } from 'modules/log';
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
  const { log, toggle } = useLog();

  return (
    <div className={classes.habits}>
      {habits.map((habit) => (
        <div key={habit.id} className={classes.habit}>
          <Checker
            habit={habit}
            done={log[habit.id]}
            onClick={() => toggle(habit.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Habits);
