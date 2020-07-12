import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  ButtonBase,
  Typography,
} from '@material-ui/core';
import clsx from 'classnames';
import { Habit, CADENCES } from 'modules/habits';
import Indicator from './Indicator';

const styles = ({ spacing }: Theme) =>
  createStyles({
    checker: {
      textAlign: 'start',
      width: '100%',
      height: 64,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `0 ${spacing(1)}px`,
    },
    checkerDone: {
      opacity: 0.5,
    },
    checkerMain: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    checkerHabitInfo: {
      marginLeft: spacing(2),
    },
    checkerHabitCadence: {
      fontStyle: 'italic',
    },
  });

type Props = WithStyles<typeof styles> & {
  habit: Habit;
  done: boolean;
};

const HabitChecker: React.FC<Props> = ({ classes, habit, done }) => {
  return (
    <ButtonBase
      className={clsx(classes.checker, { [classes.checkerDone]: done })}
    >
      <div className={classes.checkerMain}>
        <Indicator done={done} />
        <div className={classes.checkerHabitInfo}>
          <Typography variant="subtitle1">{habit.name}</Typography>
          <Typography
            className={classes.checkerHabitCadence}
            color="textSecondary"
          >
            {habit.cadence === CADENCES.daily ? 'Daily task' : 'Weekly task'}
          </Typography>
        </div>
      </div>
      {done && <Typography variant="button">Done</Typography>}
    </ButtonBase>
  );
};

export default withStyles(styles)(HabitChecker);
