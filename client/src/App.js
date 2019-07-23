import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Catalog from './Components/Catalog/Catalog';
import New from './Components/Catalog/New';
import Actu from './Components/Catalog/Actu';
import Albums from './Components/Catalog/Albums';
import Genres from './Components/Catalog/Genres';
import Search from './Components/Search/Search';
import Playlist from './Components/Playlist/Playlist';
import Contact from './Components/Contact/Contact';
import Account from './Components/Account/Account';
import TameImpala from './Components/Catalog/Artists/TameImpala';
import Currents from './Components/Catalog/Artists/Albums/Currents';
// import Subscribe from './Subscribe/Subscribe';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>

        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/about" component={About} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/new" component={New} />
        <Route path="/actu" component={Actu} />
        <Route path="/albums" component={Albums} />
        <Route path="/genres" component={Genres} />
        <Route path="/search" component={Search} />
        <Route path="/playlist" component={Playlist} />
        <Route path="/contact" component={Contact} />
        <Route path="/account" component={Account} />
        <Route path="/TameImpala" component={TameImpala} />
        <Route path="/Currents" component={Currents} />
        {/* <Route path="/subscribe" component={Subscribe} /> */}
          
        </Router>
      
      </div>
    );
  }
}

