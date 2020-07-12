import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import AddHabit from 'components/AddHabit';
import Habits from 'components/Habits';
import Habit from 'components/Habit';
import AllHabits from 'components/AllHabits';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/all" exact>
          <AllHabits />
        </Route>
        <Route path="/add" exact>
          <AddHabit />
        </Route>
        <Route path="/:id">
          <Habit />
        </Route>
        <Route path="/" exact>
          <Habits />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
