import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Typography,
  Box,
} from '@material-ui/core';
import HabitGrid from 'components/HabitGrid';
import HabitTimeline from 'components/HabitTimeline';
import { useHabitLogs, getStatsFromLogs } from 'modules/log';
import NumericStat from './NumericStat';

const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    habitStats: {
      margin: spacing(3),
    },
    numericStatsGrid: {
      marginTop: spacing(3),
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: spacing(1),
      [breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      [breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      [breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
    },
  });

type Props = WithStyles<typeof styles> & {
  id: string;
};

const HabitStats: React.FC<Props> = ({ classes, id }) => {
  const { habitLogs, loading } = useHabitLogs(id);
  const stats = getStatsFromLogs(habitLogs);

  return (
    <div className={classes.habitStats}>
      <Typography variant="h4">Stats</Typography>
      <div className={classes.numericStatsGrid}>
        <NumericStat
          title="Total Completions"
          value={stats.totalCompletions}
          loading={loading}
        />
        <NumericStat
          title="Current Streak"
          value={stats.streak}
          loading={loading}
        />
        <NumericStat
          title="Longest Streak"
          value={stats.maxStreak}
          loading={loading}
        />
      </div>
      <Box marginTop={3}>
        <HabitTimeline habitLogs={habitLogs} loading={loading} />
      </Box>
      <Box marginTop={3}>
        <HabitGrid habitLogs={habitLogs} />
      </Box>
    </div>
  );
};

export default withStyles(styles)(HabitStats);
