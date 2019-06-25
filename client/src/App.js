import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
//import About from './About/About';
//import Signin from './Signin/Signin';
//import Signup from './Signup/Signup';
//import Catalog from './Catalog/Catalog';
//import Header from './Header/Header';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

