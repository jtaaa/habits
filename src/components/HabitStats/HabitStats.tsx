import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Typography,
  Box,
  Card,
} from '@material-ui/core';
import HabitGrid from 'components/HabitGrid';

const styles = ({ spacing }: Theme) =>
  createStyles({
    habitStats: {
      padding: spacing(3),
      margin: spacing(3),
    },
  });

type Props = WithStyles<typeof styles> & {
  id: string;
};

const HabitStats: React.FC<Props> = ({ classes, id }) => {
  return (
    <Card elevation={3} className={classes.habitStats}>
      <Typography variant="h4">Stats</Typography>
      <Box marginTop={3}>
        <HabitGrid id={id} />
      </Box>
    </Card>
  );
};

export default withStyles(styles)(HabitStats);
