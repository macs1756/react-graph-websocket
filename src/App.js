// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/';
import Graph from './pages/graph';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/graph" component={Graph} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;