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
        <AppRoute path={'/naves'} component={SpaceshipsList} section={{id: '2', title:'Starships List'}} />
        <AppRoute path="/upsert" component={SpaceshipForm} section={{id: '3',title:'Starship Edit Form'}}/> 
        <AppRoute path={'/'} component={FilmsList} section={{id: '1',title:'Films List'}}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
