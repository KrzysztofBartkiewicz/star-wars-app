import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import Home from '../views/Home';
import Characters from '../views/Characters';
import SingleCharacter from '../views/SingleCharacter';
import Favorites from '../views/Favorites';
import PrivateRoute from './PrivateRoute';
import Login from '../views/Login';
import Search from '../views/Search';
import { useSelector } from 'react-redux';
import { getUserData } from '../redux/userReducer/selectors';
import Spinner from '../components/utils/Spinner';

const Router = () => {
  const { currentUser } = useSelector(getUserData);

  const rednerRouter = () => (
    <BrowserRouter>
      {typeof currentUser === 'object' && <Redirect to={routes.home} />}
      <Switch>
        <PrivateRoute
          exact
          path={routes.home}
          component={Home}
          isLogged={currentUser}
        />
        <PrivateRoute
          path={routes.characters}
          component={Characters}
          isLogged={currentUser}
        />
        <PrivateRoute
          path={routes.character}
          component={SingleCharacter}
          isLogged={currentUser}
        />
        <PrivateRoute
          exact
          path={routes.favorites}
          component={Favorites}
          isLogged={currentUser}
        />
        <PrivateRoute
          exact
          path={routes.search}
          component={Search}
          isLogged={currentUser}
        />
        <Route exact path={routes.login} component={Login} />
        <Route render={() => <Redirect to={routes.home} />} />
      </Switch>
    </BrowserRouter>
  );

  return <>{currentUser ? rednerRouter() : <Spinner />}</>;
};

export default Router;
