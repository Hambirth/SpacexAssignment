import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LaunchList from './LaunchList';
import LaunchDetails from './LaunchDetails';


function Dashboard() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LaunchList} />
        <Route path="/launches/:id" component={LaunchDetails} />
      </Switch>
    </Router>
  );
}

export default Dashboard;


