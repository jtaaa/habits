import React from 'react';
import {
  Typography,
  createStyles,
  withStyles,
  Theme,
  WithStyles,
  IconButton,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

const styles = ({ spacing }: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: spacing(3),
    },
    headerTitle: {
      fontWeight: 'bold',
    },
  });

type Props = WithStyles<typeof styles>;

const Header: React.FC<Props> = ({ classes }) => {
  return (
    <div className={classes.header}>
      <Typography variant="h3" className={classes.headerTitle}>
        Habits
      </Typography>
      <IconButton aria-label="add">
        <AddIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(Header);
