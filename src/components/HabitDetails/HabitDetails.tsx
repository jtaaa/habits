import React, { useState } from 'react';
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles,
  TextField,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import Footer from './Footer';
import { CADENCES } from './types';

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    habitDetails: {
      padding: spacing(3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    habitDetailsCadence: {
      color: palette.text.secondary,
      marginTop: spacing(2),
    },
  });

type Props = WithStyles<typeof styles>;

const HabitDetails: React.FC<Props> = ({ classes }) => {
  const [cadence, setCadence] = useState(CADENCES.daily);

  return (
    <div className={classes.habitDetails}>
      <TextField
        id="habit-name"
        label="Name"
        variant="outlined"
        fullWidth
        helperText="A simple name for you habit"
      />
      <ButtonGroup variant="text" className={classes.habitDetailsCadence}>
        <Button
          onClick={() => setCadence(CADENCES.daily)}
          color={cadence === CADENCES.daily ? 'primary' : 'secondary'}
        >
          Daily
        </Button>
        <Button
          onClick={() => setCadence(CADENCES.weekly)}
          color={cadence === CADENCES.weekly ? 'primary' : 'secondary'}
        >
          Weekly
        </Button>
      </ButtonGroup>
      <Footer onSave={async () => console.log('Saved')} />
    </div>
  );
};

export default withStyles(styles)(HabitDetails);
