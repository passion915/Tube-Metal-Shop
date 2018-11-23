import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/homepage';
import CartPage from './components/pages/cartpage';
import TestPage from './components/pages/TestPage';

const Router = () => (
     <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/test' component={TestPage} />
    </Switch>
)

export default Router