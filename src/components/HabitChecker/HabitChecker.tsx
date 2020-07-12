import React from 'react';
import { Link } from 'react-router-dom';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  ButtonBase,
  Typography,
  Button,
} from '@material-ui/core';
import clsx from 'classnames';
import { Habit, CADENCE } from 'modules/habits';
import LINKS from 'utils/links';
import Indicator from './Indicator';

const styles = ({ spacing }: Theme) =>
  createStyles({
    checker: {
      width: '100%',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      padding: `0 ${spacing(1)}px`,
    },
    checkerDone: {
      opacity: 0.5,
    },
    checkerMain: {
      textAlign: 'start',
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
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
  done?: boolean;
  onDone?: () => void;
};

const HabitChecker: React.FC<Props> = ({ classes, habit, done, onDone }) => {
  return (
    <div className={clsx(classes.checker, { [classes.checkerDone]: done })}>
      <ButtonBase
        className={classes.checkerMain}
        component={Link}
        to={LINKS.HABIT(habit.id)}
      >
        <Indicator done={!!done} />
        <div className={classes.checkerHabitInfo}>
          <Typography variant="subtitle1">{habit.name}</Typography>
          <Typography
            className={classes.checkerHabitCadence}
            color="textSecondary"
          >
            {habit.cadence === CADENCE.daily ? 'Daily task' : 'Weekly task'}
          </Typography>
        </div>
      </ButtonBase>
      {onDone && (
        <Button variant="text" onClick={onDone}>
          Done
        </Button>
      )}
    </div>
  );
};

export default withStyles(styles)(HabitChecker);