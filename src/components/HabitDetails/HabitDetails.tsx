import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  createStyles,
  withStyles,
  Theme,
  WithStyles,
  TextField,
  ButtonGroup,
  Button,
} from '@material-ui/core';
import { useAddHabit, CADENCES } from 'modules/habits';
import LINKS from 'utils/links';
import Footer from './Footer';

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
  const [name, setName] = useState('');
  const [cadence, setCadence] = useState(CADENCES.daily);

  const addHabit = useAddHabit();
  const history = useHistory();
  const onSave = async () => {
    if (!name) {
      return console.error('Please enter a name for your habit');
    }
    await addHabit({ name, cadence });
    history.push(LINKS.HOME);
  };

  return (
    <div className={classes.habitDetails}>
      <TextField
        id="habit-name"
        label="Name"
        variant="outlined"
        fullWidth
        helperText="A simple name for you habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
      <Footer onSave={onSave} />
    </div>
  );
};

export default withStyles(styles)(HabitDetails);
