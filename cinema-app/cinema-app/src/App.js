import React, { Component } from 'react';
import Cinema from './containers/Cinema/Cinema';
import Seets from './components/Seets/Seets';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ScheduleTable from './components/Schedule/ScheduleTable';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation />
      <Switch>
        <Route path="/movies/:name/:price" component={ Seets }/>
        <Route path="/schedule" component={ScheduleTable} />
        <Route path="/" component={ Cinema } />
      </Switch>
      </div>
    );
  }
}

export default App;
