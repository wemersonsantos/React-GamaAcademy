import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './Home';
import Repositories from './Repositories';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/repositories' component={Repositories}/>
            </Switch>
        </BrowserRouter>
    )
}