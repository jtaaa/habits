import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Header from 'components/Header';
import HabitDetails from 'components/HabitDetails';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/add" exact>
          <HabitDetails />
        </Route>
        <Route path="/" exact>
          <Typography>Riddle me this</Typography>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
