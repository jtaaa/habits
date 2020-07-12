import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Typography,
  createStyles,
  withStyles,
  Theme,
  WithStyles,
  Button,
} from '@material-ui/core';
import LINKS from 'utils/links';

const styles = ({ spacing }: Theme) =>
  createStyles({
    footer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: spacing(3),
    },
    footerButton: {
      height: 64,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

type Props = WithStyles<typeof styles> & {
  onSave: () => Promise<void>;
};

const HabitDetailsFooter: React.FC<Props> = ({ classes, onSave }) => {
  const location = useLocation();
  const isAddingHabit = location.pathname === LINKS.ADD_HABIT;

  return (
    <div className={classes.footer}>
      {isAddingHabit && (
        <Button
          onClick={onSave}
          variant="outlined"
          className={classes.footerButton}
        >
          <Typography variant="button">Save</Typography>
        </Button>
      )}
    </div>
  );
};

export default withStyles(styles)(HabitDetailsFooter);
