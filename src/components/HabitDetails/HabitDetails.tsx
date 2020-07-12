import React from 'react';
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
import { useAddHabit, CADENCES, Habit } from 'modules/habits';
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

type Props = WithStyles<typeof styles> & {
  habit: Habit;
  setHabit:
    | React.Dispatch<React.SetStateAction<Habit | undefined>>
    | React.Dispatch<React.SetStateAction<Habit>>;
};

const HabitDetails: React.FC<Props> = ({ classes, habit, setHabit }) => {
  const setName = async (name: string) => {
    await setHabit({ ...habit, name });
  };
  const setCadence = async (cadence: CADENCES) => {
    await setHabit({ ...habit, cadence });
  };

  const addHabit = useAddHabit();
  const history = useHistory();
  const onSave = async () => {
    if (!habit.name) {
      return console.error('Please enter a name for your habit');
    }
    await addHabit(habit);
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
        value={habit.name}
        onChange={(e) => setName(e.target.value)}
      />
      <ButtonGroup variant="text" className={classes.habitDetailsCadence}>
        <Button
          onClick={() => setCadence(CADENCES.daily)}
          color={habit.cadence === CADENCES.daily ? 'primary' : 'secondary'}
        >
          Daily
        </Button>
        <Button
          onClick={() => setCadence(CADENCES.weekly)}
          color={habit.cadence === CADENCES.weekly ? 'primary' : 'secondary'}
        >
          Weekly
        </Button>
      </ButtonGroup>
      <Footer onSave={onSave} />
    </div>
  );
};

export default withStyles(styles)(HabitDetails);
