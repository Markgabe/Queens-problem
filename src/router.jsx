import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './screens/Home';
import Game from './screens/Game';
import Solution from './screens/Solution';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game/" component={Game} />
        <Route path="/solution/" component={Solution} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
