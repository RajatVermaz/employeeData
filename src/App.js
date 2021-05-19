import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import GetEmployee from './GetEmployee';
import Login from './Login';
import Navbar from './Navbar';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact Login component={Login} />
          <Route path="/get-employee" GetEmployee component={GetEmployee} />
          <Route path="/dashboard" Dashboard component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
