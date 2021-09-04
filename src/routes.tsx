import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './screens/Login';
import { route } from './utils/route';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={route.login} exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
