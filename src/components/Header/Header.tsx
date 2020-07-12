import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Typography,
  createStyles,
  withStyles,
  Theme,
  WithStyles,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import LINKS from 'utils/links';

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
  const location = useLocation();
  const isAddingHabit = location.pathname === LINKS.ADD_HABIT;

  return (
    <div className={classes.header}>
      <Typography variant="h3" className={classes.headerTitle}>
        Habits
      </Typography>
      {!isAddingHabit ? (
        <Link to={LINKS.ADD_HABIT}>
          <IconButton aria-label="add">
            <AddIcon fontSize="large" />
          </IconButton>
        </Link>
      ) : (
        <Link to={LINKS.HOME}>
          <IconButton aria-label="cancel">
            <CancelIcon fontSize="large" />
          </IconButton>
        </Link>
      )}
    </div>
  );
};

export default withStyles(styles)(Header);
