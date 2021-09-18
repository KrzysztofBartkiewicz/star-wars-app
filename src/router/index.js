import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import NavigationTemplate from '../templates/Navigation/';
import Home from '../views/Home';
import Characters from '../views/Characters';
import SingleCharacter from '../views/SingleCharacter';
import Favorites from '../views/Favorites';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.characters} component={Characters} />
          <Route path={routes.character} component={SingleCharacter} />
          <Route path={routes.favorites} component={Favorites} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
