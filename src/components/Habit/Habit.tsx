import React from 'react';
import { useParams } from 'react-router-dom';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { useHabit } from 'modules/habits';
import HabitDetails from 'components/HabitDetails';

type Params = {
  id: string;
};

const styles = () =>
  createStyles({
    habit: {},
  });

type Props = WithStyles<typeof styles>;

const Habit: React.FC<Props> = ({ classes }) => {
  const { id } = useParams<Params>();
  const { habit, setHabit } = useHabit(id);

  return (
    <div className={classes.habit}>
      {habit && <HabitDetails habit={habit} setHabit={setHabit} />}
    </div>
  );
};

export default withStyles(styles)(Habit);
