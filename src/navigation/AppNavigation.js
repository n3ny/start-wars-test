import React from 'react'; 
import { Switch, Route } from 'react-router-dom';

import FilmsList from '../modules/films/films-list/FilmsList';

const AppNavigation = (props) => (
    <Switch>
        <Route path="/films-list" component={FilmsList} />
    </Switch>
);
export default AppNavigation;