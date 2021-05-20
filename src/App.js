import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import GetEmployee from './getApi/GetEmployee';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Setting from './components/Setting';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import GlobalContext from './context/GlobalContext';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact Login component={Login} />
          <Route path="/get-employee" GetEmployee component={GetEmployee} />
          <Route path="/dashboard" Dashboard component={Dashboard} />
          <GlobalContext>
            <Route path="/setting" Setting component={Setting} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </GlobalContext>
        </Switch>
      </Router>
    </>
  );
};
export default App;
