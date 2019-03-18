import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ConfessionDetails from './components/confession/ConfessionDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/confession/:id" component={ConfessionDetails} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
