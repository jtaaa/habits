import React, { useContext } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import AddHabit from 'components/AddHabit';
import Habits from 'components/Habits';
import Habit from 'components/Habit';
import AllHabits from 'components/AllHabits';
import Login from 'components/Login';
import { UserContext } from 'modules/user';
import LINKS from 'utils/links';

const App = () => {
  const location = useLocation();
  const { user, loading } = useContext(UserContext);

  if (!loading && !user && location.pathname !== LINKS.LOGIN) {
    return <Redirect to={LINKS.LOGIN} />;
  }
  if (!loading && user && location.pathname === LINKS.LOGIN) {
    return <Redirect to={LINKS.HOME} />;
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path={LINKS.LOGIN} exact>
          <Login />
        </Route>
        <Route path={LINKS.ALL} exact>
          <AllHabits />
        </Route>
        <Route path={LINKS.ADD_HABIT} exact>
          <AddHabit />
        </Route>
        <Route path={LINKS.HABIT_TEMPLATE}>
          <Habit />
        </Route>
        <Route path={LINKS.HOME} exact>
          <Habits />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
