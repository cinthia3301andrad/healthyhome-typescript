import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import { route } from './utils/route';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={route.login} exact component={Login} />
        <Route path={route.home} exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
