import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import HabitDetails from 'components/HabitDetails';
import Habits from 'components/Habits';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/add" exact>
          <HabitDetails />
        </Route>
        <Route path="/" exact>
          <Habits />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
