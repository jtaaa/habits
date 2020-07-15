import React from 'react';
import {
  createStyles,
  WithStyles,
  withStyles,
  Typography,
  CircularProgress,
} from '@material-ui/core';

const styles = () =>
  createStyles({
    numericStat: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

type Props = WithStyles<typeof styles> & {
  title: string;
  value: number;
  loading?: boolean;
};

const NumericStat: React.FC<Props> = ({
  classes,
  title,
  value,
  loading = false,
}) => {
  return (
    <div className={classes.numericStat}>
      <Typography variant="overline">{title}</Typography>
      {loading ? (
        <CircularProgress size="1em" />
      ) : (
        <Typography variant="body1" align="center">
          {value}
        </Typography>
      )}
    </div>
  );
};

export default withStyles(styles)(NumericStat);
