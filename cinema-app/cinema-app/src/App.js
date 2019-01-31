import React, { Component } from 'react';
import Cinema from './containers/Cinema/Cinema';
import Seets from './components/Seets/Seets';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cinema />
        <Seets />
      </div>
    );
  }
}

export default App;
