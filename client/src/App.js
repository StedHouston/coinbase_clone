import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Homepage from './components/Homepage';
import Signup_page from './components/Signup_page'

function App() {

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/signup">
                <Signup_page/>
            </Route>

            <Route path="/">
                <Homepage/>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
