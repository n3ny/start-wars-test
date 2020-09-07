import React from 'react'; 
import { Switch, Route } from 'react-router-dom';

import SpaceshipsList from '../modules/films/SpaceshipsList';
import SpaceshipForm from '../modules/films/SpaceshipForm';

const AppNavigation = (props) => (
    <Switch>
        <Route path="/naves" component={SpaceshipsList} />        
        <Route path="/upsert" component={SpaceshipForm} />        
    </Switch>
);
export default AppNavigation;