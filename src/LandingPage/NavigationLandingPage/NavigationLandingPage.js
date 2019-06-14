import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLandingPage.css';
import { Navbar } from 'react-bootstrap';
//Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

function NavigationLandingPage() {
    return (
        <Navbar default collapseOnSelect>
            <Link to="/Signup/"><button className="signup">SIGN UP</button></Link>
            <Link to="/Signin/"><button className="signin">SIGN IN</button></Link>
        </Navbar>

    );
}

export default NavigationLandingPage;