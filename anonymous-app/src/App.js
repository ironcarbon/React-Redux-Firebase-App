import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ConfessionDetails from './components/confession/ConfessionDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateConfession from './components/confession/CreateConfession';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/confession/:id" component={ConfessionDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateConfession} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
