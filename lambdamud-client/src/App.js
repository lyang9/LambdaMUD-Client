import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Home from './components/home';
import Registration from './components/registrations';
import Login from './components/login';
import Play from './components/play';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Registration} />
        <Route path='/login' component={Login} />
        <Route path='/api/adv/init' component={Play} />
      </div>
    );
  }
}

export default App;
