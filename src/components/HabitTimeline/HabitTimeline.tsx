import React from 'react';
import range from 'lodash/range';
import { subDays, format } from 'date-fns';
import {
  WithStyles,
  Theme,
  createStyles,
  withStyles,
  Typography,
} from '@material-ui/core';
import clsx from 'classnames';
import { getDateId, TODAY } from 'utils/date';

const TIMELINE_SIZE = 14;

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    habitTimeline: {
      display: 'flex',
      flexDirection: 'row-reverse',
      overflow: 'scroll',
    },
    habitBlockTimeline: {
      height: 128,
      padding: `${spacing(3)}px ${spacing(4)}px`,
      backgroundColor: palette.secondary.main,
      color: palette.getContrastText(palette.secondary.main),
    },
    habitBlockTimelineDone: {
      backgroundColor: palette.success.main,
      color: palette.getContrastText(palette.success.main),
    },
  });

type Props = WithStyles<typeof styles> & { habitLogs: Record<string, boolean> };

const HabitTimeline: React.FC<Props> = ({ classes, habitLogs }) => {
  return (
    <div className={classes.habitTimeline}>
      {range(0, TIMELINE_SIZE).map((offset) => {
        const date = subDays(TODAY, offset);
        const dateId = getDateId(date);
        const isDone = habitLogs[dateId];
        return (
          <div
            key={offset}
            className={clsx(classes.habitBlockTimeline, {
              [classes.habitBlockTimelineDone]: isDone,
            })}
          >
            <Typography align="center">{format(date, 'EEE')}</Typography>
            <Typography align="center" variant="h6">
              {format(date, 'do')}
            </Typography>
            <Typography align="center" variant="caption" display="block">
              {format(date, 'MMMM')}
            </Typography>
          </div>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(HabitTimeline);
