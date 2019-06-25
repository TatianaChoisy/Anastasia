import React, { Component } from 'react';
import './Home.css';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import About from '../About/About';
import Subscribe from '../Subscribe/Subscribe';
import HeaderHome from '../Header/HeaderHome';
import Button from '../Button/Button';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';
//Navbar, Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button


export default class Home extends Component {

    render() {
        return (
         
                <div className="Home">
                    <Router>
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Signin} />
                    <HeaderHome />
                    </Router>

                   
                    <Jumbotron className="jumbotron-home">
                        <h1 className="title-home">Anastasia</h1>
                        <p className="first-paragraphe-home">Listen to your music, create your playlists,<br></br>Share them with others.</p>
                        <p className="second-paragraphe-home">Anastasia is probably the best streaming music platform, you can subscribe or listen for free.</p>
                        
                    <Router>
                    <Route path="/about" component={About} />
                    <Route path="/subscribe" component={Subscribe} />
                    <Button />
                    </Router>
                        
                    
                    </Jumbotron>
                
                </div>
           
        );
    }
}
