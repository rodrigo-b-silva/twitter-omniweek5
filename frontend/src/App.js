import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Timeline from './pages/Timeline'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/timeline" component={Timeline} />
        <Redirect path="*" to={'/'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
