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
  Collapse,
} from '@material-ui/core';
import {
  useAddHabit,
  Cadence,
  DAYS,
  Day,
  HabitData,
  TimePeriod,
} from 'modules/habits';
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
  habit: HabitData;
  setHabit: (habitData: HabitData) => void;
};

const HabitDetails: React.FC<Props> = ({ classes, habit, setHabit }) => {
  const setName = (name: string) => {
    setHabit({ ...habit, name });
  };
  const setCadence = (cadence: Cadence) => {
    setHabit({ ...habit, cadence });
  };
  const toggleDay = (day: Day) => {
    setHabit({ ...habit, days: { ...habit.days, [day]: !habit.days?.[day] } });
  };
  const setTimePeriod = (timePeriod: TimePeriod) => {
    setHabit({ ...habit, timePeriod });
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
          onClick={() => setCadence(Cadence.daily)}
          color={habit.cadence === Cadence.daily ? 'primary' : 'secondary'}
        >
          Daily
        </Button>
        <Button
          onClick={() => setCadence(Cadence.weekly)}
          color={habit.cadence === Cadence.weekly ? 'primary' : 'secondary'}
        >
          Weekly
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="text" className={classes.habitDetailsCadence}>
        <Button
          onClick={() => setTimePeriod(TimePeriod.AllDay)}
          color={
            habit.timePeriod === TimePeriod.AllDay ? 'primary' : 'secondary'
          }
        >
          All Day
        </Button>
        <Button
          onClick={() => setTimePeriod(TimePeriod.Morning)}
          color={
            habit.timePeriod === TimePeriod.Morning ? 'primary' : 'secondary'
          }
        >
          Morning
        </Button>
        <Button
          onClick={() => setTimePeriod(TimePeriod.Afternoon)}
          color={
            habit.timePeriod === TimePeriod.Afternoon ? 'primary' : 'secondary'
          }
        >
          Afternoon
        </Button>
        <Button
          onClick={() => setTimePeriod(TimePeriod.Night)}
          color={
            habit.timePeriod === TimePeriod.Night ? 'primary' : 'secondary'
          }
        >
          Night
        </Button>
      </ButtonGroup>
      <Collapse in={habit.cadence === Cadence.weekly}>
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
      </Collapse>
      <Footer onSave={onSave} />
    </div>
  );
};

export default withStyles(styles)(HabitDetails);
