import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderAbout.css';
import { Navbar } from 'react-bootstrap';
//Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

function HeaderAbout() {
    return (
        <Navbar default collapseOnSelect>
            <Link to="/Home" className="button-back-home"><button className="home">HOME</button></Link>
            <Link to="/Signup" className="button-signup-about"><button className="signup">SIGN UP</button></Link>
            <Link to="/Signin" className="button-signup-about"><button className="signin">SIGN IN</button></Link>
        </Navbar>

    );
}

export default HeaderAbout;