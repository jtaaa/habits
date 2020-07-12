import React from 'react';
import range from 'lodash/range';
import { subDays } from 'date-fns';
import { WithStyles, Theme, createStyles, withStyles } from '@material-ui/core';
import clsx from 'classnames';
import { useHabitLogs } from 'modules/log';
import { getDateId } from 'utils/date';

const GRID_SIZE = 140;
const TODAY = new Date();

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    habitGrid: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(20, 1fr)',
      gridTemplateRows: 'repeat(7, 8px)',
      gridGap: spacing(1),
      gridAutoFlow: 'column',
    },
    habitGridBlock: {
      backgroundColor: palette.secondary.main,
    },
    habitGridBlockDone: {
      backgroundColor: palette.success.main,
    },
  });

type Props = WithStyles<typeof styles> & { id: string };

const HabitGrid: React.FC<Props> = ({ classes, id }) => {
  const habitLogs = useHabitLogs(id);
  return (
    <div className={classes.habitGrid}>
      {range(GRID_SIZE - 1, -1, -1).map((offset) => {
        const date = subDays(TODAY, offset);
        const dateId = getDateId(date);
        const isDone = habitLogs[dateId];
        return (
          <div
            key={offset}
            className={clsx(classes.habitGridBlock, {
              [classes.habitGridBlockDone]: isDone,
            })}
          />
        );
      })}
    </div>
  );
};

export default withStyles(styles)(HabitGrid);
