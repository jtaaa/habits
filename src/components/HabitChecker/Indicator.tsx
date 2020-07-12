import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core';
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
  });

type Props = WithStyles<typeof styles> & {
  done: boolean;
};

const Indicator: React.FC<Props> = ({ classes, done }) => {
  return (
    <div className={clsx(classes.checker, { [classes.checkerDone]: done })} />
  );
};

export default withStyles(styles)(Indicator);
