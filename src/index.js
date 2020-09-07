import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import generateStore from './redux/store';

import './index.css';
import FilmsList from './modules/films/films-list/FilmsList';
import AppRoute from './App';
import SpaceshipsList from './modules/films/SpaceshipsList';
import SpaceshipForm from './modules/films/SpaceshipForm';

const store = generateStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <AppRoute path={'/naves'} component={SpaceshipsList} />
        <AppRoute path="/upsert" component={SpaceshipForm} /> 
        <AppRoute path={'/'} component={FilmsList} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
