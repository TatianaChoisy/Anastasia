import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import Catalog from './Catalog/Catalog';
import New from './Catalog/New';
import Actu from './Catalog/Actu';
import Artists from './Catalog/Artists';
import Genres from './Catalog/Genres';
import Search from './Search/Search';
import Playlist from './Playlist/Playlist';
import Contact from './Contact/Contact';
import Account from './Account/Account';
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
        <Route path="/catalog/new" component={Catalog} />
        <Route path="/catalog/new" component={New} />
        <Route path="/catalog/actu" component={Actu} />
        <Route path="/catalog/artists" component={Artists} />
        <Route path="/catalog/genres" component={Genres} />
        <Route path="/search" component={Search} />
        <Route path="/playlist" component={Playlist} />
        <Route path="/contact" component={Contact} />
        <Route path="/account" component={Account} />
          

        {/* <Route path="/subscribe" component={Subscribe} /> */}
          
        </Router>
      
      </div>
    );
  }
}

