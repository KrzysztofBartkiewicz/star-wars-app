import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import Home from '../views/Home';
import Characters from '../views/Characters';
import SingleCharacter from '../views/SingleCharacter';
import Favorites from '../views/Favorites';
import PrivateRoute from './PrivateRoute';
import { useSelector } from 'react-redux';
import { getUserData } from '../redux/userReducer/selectors';
import Login from '../views/Login';

const Router = () => {
  const { currentUser } = useSelector(getUserData);

  return (
    <BrowserRouter>
      {currentUser && <Redirect to={routes.home} />}
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
          exact
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
        <Route path={routes.login} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
