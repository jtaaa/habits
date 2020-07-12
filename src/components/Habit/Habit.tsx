import React from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core';
import HabitDetails from 'components/HabitDetails';
import HabitGrid from 'components/HabitGrid';
import { useHabit } from 'modules/habits';

type Params = {
  id: string;
};

const styles = ({ spacing }: Theme) =>
  createStyles({
    habit: {},
    habitGrid: {
      padding: spacing(3),
    },
  });

type Props = WithStyles<typeof styles>;

const Habit: React.FC<Props> = ({ classes }) => {
  const { id } = useParams<Params>();
  const { habit, setHabit } = useHabit(id);

  return (
    <div className={classes.habit}>
      {habit && (
        <>
          <HabitDetails habit={habit} setHabit={setHabit} />
          <div className={classes.habitGrid}>
            <HabitGrid id={habit.id} />
          </div>
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(Habit);
