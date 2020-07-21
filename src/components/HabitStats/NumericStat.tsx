import React from 'react';
import {
  createStyles,
  WithStyles,
  withStyles,
  Typography,
  CircularProgress,
  Box,
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
      <Typography variant="h4" align="center">
        {loading ? <CircularProgress /> : value}
      </Typography>
      <Box marginTop={1}>
        <Typography variant="overline">{title}</Typography>
      </Box>
    </div>
  );
};

export default withStyles(styles)(NumericStat);
