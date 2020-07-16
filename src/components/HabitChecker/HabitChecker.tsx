import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  ButtonBase,
  Typography,
  Card,
  IconButton,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import clsx from 'classnames';
import { Habit, Cadence } from 'modules/habits';
import LINKS from 'utils/links';
import Indicator from './Indicator';

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    checker: {
      width: '100%',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      padding: `0 ${spacing(1)}px`,
    },
    checkerMainDone: {
      opacity: 0.5,
    },
    checkDone: {
      color: palette.success.main,
    },
    checkerMain: {
      textAlign: 'start',
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      transition: 'opacity 200ms ease-in',
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
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Card
      className={clsx(classes.checker)}
      elevation={isHovering ? 2 : !done ? 1 : 0}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <ButtonBase
        className={clsx(classes.checkerMain, {
          [classes.checkerMainDone]: done && !isHovering,
        })}
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
            {habit.cadence === Cadence.daily ? 'Daily task' : 'Weekly task'}
          </Typography>
        </div>
      </ButtonBase>
      {onDone && (
        <IconButton
          className={clsx({ [classes.checkDone]: done })}
          onClick={onDone}
          aria-label="done"
        >
          <CheckIcon />
        </IconButton>
      )}
    </Card>
  );
};

export default withStyles(styles)(HabitChecker);
