import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderNav from './components/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav/>
      </div>
    );
  }
}

export default App;
