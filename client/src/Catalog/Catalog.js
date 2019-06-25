import React from 'react';
import './About.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';
import Header from '../Header/Header';
//Navbar, Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

function Catalog() {
    return (
        <Router>

            <Header />
            
            <div className="Catalog">
                
            <Route component={Home} />
            <Route path="/Search" component={Search} />
            <Route path="/Library" component={Library} />
            <Route path="/Contact" component={Contact} />
            <Route path="/User" component={User} />
            <Route path="/Logout" component={Logout}/>

            
                
        </div>
        </Router>
    );
}

export default Catalog;