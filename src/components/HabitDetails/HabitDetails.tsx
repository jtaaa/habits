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
  Chip,
} from '@material-ui/core';
import { useAddHabit, CADENCE, Habit, DAYS, DAY } from 'modules/habits';
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
    habitDetailsWeeklyDays: {
      marginTop: spacing(2),
    },
    habitDetailsDayChip: {
      lineHeight: '40px',
      marginLeft: spacing(1),
    },
  });

type Props = WithStyles<typeof styles> & {
  habit: Habit;
  setHabit:
    | React.Dispatch<React.SetStateAction<Habit | undefined>>
    | React.Dispatch<React.SetStateAction<Habit>>;
};

const HabitDetails: React.FC<Props> = ({ classes, habit, setHabit }) => {
  const setName = (name: string) => {
    setHabit({ ...habit, name });
  };
  const setCadence = (cadence: CADENCE) => {
    setHabit({ ...habit, cadence });
  };
  const toggleDay = (day: DAY) => {
    setHabit({ ...habit, days: { ...habit.days, [day]: !habit.days?.[day] } });
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
          onClick={() => setCadence(CADENCE.daily)}
          color={habit.cadence === CADENCE.daily ? 'primary' : 'secondary'}
        >
          Daily
        </Button>
        <Button
          onClick={() => setCadence(CADENCE.weekly)}
          color={habit.cadence === CADENCE.weekly ? 'primary' : 'secondary'}
        >
          Weekly
        </Button>
      </ButtonGroup>
      {habit.cadence === CADENCE.weekly && (
        <div className={classes.habitDetailsWeeklyDays}>
          {DAYS.map((day) => (
            <span key={day} className={classes.habitDetailsDayChip}>
              <Chip
                label={day}
                variant={habit.days?.[day] ? 'default' : 'outlined'}
                onClick={() => toggleDay(day)}
              />
            </span>
          ))}
        </div>
      )}
      <Footer onSave={onSave} />
    </div>
  );
};

export default withStyles(styles)(HabitDetails);
