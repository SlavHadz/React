import React, { Component } from 'react';
import Cinema from './containers/Cinema/Cinema';
import Seets from './components/Seets/Seets';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ScheduleTable from './components/Schedule/ScheduleTable';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import SideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return {showSideDrawer: !prevState.showSideDrawer};
    })
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  render() {
    return (
      <div className="App">
      <Navigation toggleClick={this.sideDrawerToggleHandler} />
      <SideDrawer
      open={this.state.showSideDrawer}
      closed={this.sideDrawerClosedHandler} />
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
