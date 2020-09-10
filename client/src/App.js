import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Homepage from './components/Homepage';
import Signup_page from './components/Signup_page';
import Signin_page from './components/Signin_page';
import PricesPage from './components/PricesPage';

function App() {

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/signup">
                <Signup_page/>
            </Route>
            <Route path="/signin">
                <Signin_page/>
            </Route>
            <Route path="/price">
                <PricesPage/>
            </Route>
            <Route path="/">
                <Homepage/>
            </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
