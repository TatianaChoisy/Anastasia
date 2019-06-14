import React from 'react';
import './LandingPage.css';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import NavigationLandingPage from './NavigationLandingPage/NavigationLandingPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';
//Navbar, Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

function LandingPage() {
    return (
        <Router>
        <div className="LandingPage">

                <Route path="Signup" component={Signup} />
                <Route path="Signin" component={Signin}/>
            

            <NavigationLandingPage />
            <Jumbotron className="JumbotronLandingPage">
            <h1 className="TitleLandingPage">Anastasia</h1>
            <p className="FirstParagraphe">Listen to your music, create your playlists,<br></br> Share them with others.</p>
            <p className="SecondParagraphe">Anastasia is probably the best streaming music platform, you can subscribe or listen for free.</p>
            <Link to="/About/"><button className="about">ABOUT US</button></Link>
            <Link to="/Subscribe/"><button className="subscribe">SUBSCRIBE</button></Link>
            </Jumbotron>
                
        </div>
        </Router>
    );
}

export default LandingPage;