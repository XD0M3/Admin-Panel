import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fields from './Fields';
class App extends Component {
    constructor(props) {
        super(props);
        
    }

  render() {
      return (<Fields />);
  }
}

export default App;
