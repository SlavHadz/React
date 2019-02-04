import React, { Component } from 'react';
import Cinema from './containers/Cinema/Cinema';
import Seets from './components/Seets/Seets';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <Switch>
        <Route path="/movies/:name" component={ Seets }/>
        <Route path="/" component={ Cinema } />
      </Switch>
      </div>
    );
  }
}

export default App;
