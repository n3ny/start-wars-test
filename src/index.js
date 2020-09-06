import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './redux/reducers'

import './index.css';
import FilmsList from './modules/films/films-list/FilmsList';
import AppRoute from './layouts';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <AppRoute path={'/films-list'} component={FilmsList}/>
      <AppRoute path={'/'} component={FilmsList}/>
    </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
