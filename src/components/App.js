// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AddParticipants from './AddParticipants';
import ViewParticipants from './ViewParticipants';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/add-participants" component={AddParticipants} />
        <Route path="/view-participants" component={ViewParticipants} />
      </Switch>
    </Router>
  );
}

export default App;
