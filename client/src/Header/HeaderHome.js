import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderHome.css';
import { Navbar } from 'react-bootstrap';
//Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

function HeaderHome() {
    return (
        <Navbar default collapseOnSelect>
            <Link to="/Signup" className="button-signup-home"><button className="signup">SIGN UP</button></Link>
            <Link to="/Signin" className="button-signin-home"><button className="signin">SIGN IN</button></Link>
        </Navbar>

    );
}

export default HeaderHome;