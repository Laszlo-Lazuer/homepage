import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import Header from './Components/Header/';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      </div>
    );
  }
}

export default App;
