import React, { useContext } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Header from 'components/Header';
import AddHabit from 'components/AddHabit';
import Habits from 'components/Habits';
import Habit from 'components/Habit';
import AllHabits from 'components/AllHabits';
import SignIn from 'components/SignIn';
import { UserContext } from 'modules/user';
import LINKS from 'utils/links';
import { YESTERDAY } from 'utils/date';

const App = () => {
  const location = useLocation();
  const { user } = useContext(UserContext);

  if (!user && location.pathname !== LINKS.SIGNIN) {
    return <Redirect to={LINKS.SIGNIN} />;
  }
  if (user && location.pathname === LINKS.SIGNIN) {
    return <Redirect to={LINKS.HOME} />;
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route path={LINKS.YESTERDAY} exact>
          <Habits date={YESTERDAY} />
        </Route>
        <Route path={LINKS.ALL} exact>
          <AllHabits />
        </Route>
        <Route path={LINKS.ADD_HABIT} exact>
          <AddHabit />
        </Route>
        <Route path={LINKS.SIGNIN} exact>
          <SignIn />
        </Route>
        <Route path={LINKS.SIGNOUT} exact>
          <SignIn />
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
