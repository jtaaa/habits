import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Box,
  LinearProgress,
  Typography,
  Fade,
} from '@material-ui/core';
import clsx from 'classnames';

const styles = ({ palette }: Theme) =>
  createStyles({
    progress: {
      transition: 'color 300ms ease-in-out',
    },
    progressComplete: {
      color: palette.success.main,
    },
    progressBar: {
      backgroundColor: 'currentColor',
    },
  });

type Props = WithStyles<typeof styles> & {
  percentCompleted: number;
};

const Progress: React.FC<Props> = ({ classes, percentCompleted }) => {
  const isComplete = percentCompleted >= 100;
  return (
    <Box
      marginBottom={3}
      className={clsx(classes.progress, {
        [classes.progressComplete]: isComplete,
      })}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="caption" display="inline">
          {percentCompleted.toFixed(1)}%
        </Typography>
        <Fade in={isComplete}>
          <Typography variant="caption" display="inline" color="textPrimary">
            You&apos;re done for the day. Well done!
          </Typography>
        </Fade>
      </Box>
      <LinearProgress
        classes={{ bar: classes.progressBar }}
        variant="determinate"
        value={percentCompleted}
      />
    </Box>
  );
};

export default withStyles(styles)(Progress);
