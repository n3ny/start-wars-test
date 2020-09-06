import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';

import './index.css';
import FilmsList from './modules/films/films-list/FilmsList';
import AppRoute from './layouts';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
    <Switch>
      <AppRoute path={'/films-list'} component={FilmsList}/>
      <AppRoute path={'/'} component={FilmsList}/>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
