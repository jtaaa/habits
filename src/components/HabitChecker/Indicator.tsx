import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Typography,
  Fade,
} from '@material-ui/core';
import clsx from 'classnames';

const styles = ({ palette }: Theme) =>
  createStyles({
    checker: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      backgroundColor: palette.secondary.main,
    },
    checkerDone: {
      backgroundColor: palette.success.main,
    },
    checkerStreak: {
      color: palette.getContrastText(palette.secondary.main),
    },
  });

type Props = WithStyles<typeof styles> & {
  done: boolean;
  streak?: number;
};

const Indicator: React.FC<Props> = ({ classes, done, streak }) => {
  return (
    <div className={clsx(classes.checker, { [classes.checkerDone]: done })}>
      <Fade in={!!streak}>
        <Typography
          variant="h6"
          align="center"
          className={classes.checkerStreak}
        >
          {streak}
        </Typography>
      </Fade>
    </div>
  );
};

export default withStyles(styles)(Indicator);
