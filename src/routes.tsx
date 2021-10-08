import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import UserProfile from './screens/UserProfile';
import { route } from './utils/route';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={route.login} exact component={Login} />
        <Route path={route.home} exact component={Home} />
        <Route path={route.userProfile} exact component={UserProfile} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
