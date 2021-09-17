import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';
import NavigationTemplate from '../templates/NavigationTemplate';
import Home from '../views/Home';
import Characters from '../views/Characters';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.characters} component={Characters} />
        </Switch>
      </NavigationTemplate>
    </BrowserRouter>
  );
};

export default Router;
