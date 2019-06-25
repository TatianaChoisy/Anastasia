import React, { Component } from 'react';
import './Catalog.css';
import { Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Jumbotron } from 'react-bootstrap';
//Navbar, Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

export default class Catalog extends Component {
    render() {
        return (
<div className="navleft">
 
            <Jumbotron className="jumbotron-navleft">
            <h1 className="title-navleft">Anastasia</h1>
            <div className="couple">
            <img src="assets/home.svg" className="logo" alt="home logo" />
            <NavLink to="/" className="navleft-link">Home</NavLink>
            </div>
            <div className="couple">
            <img src="assets/music-player.svg" className="logo" alt="home logo"/> 
            <NavLink to="/library" className="navleft-link">Library</NavLink>
            </div>
            <div className="couple">
            <img src="assets/contact.svg" className="logo" alt="home logo"/> 
            <NavLink to="/contact" className="navleft-link">Contact</NavLink>
            </div>
                        <div className="couple">
            <img src="assets/user.svg" className="logo" alt="home logo"/> 
            <NavLink to="/account" className="navleft-link">Account</NavLink>
            </div>
            <div className="couple">
            <img src="assets/signout.svg" className="logo" alt="home logo"/> 
            <NavLink to="/signout" className="navleft-link">Sign Out</NavLink>
            </div>
            </Jumbotron>
                


            <div className="catalog">
            <div className="nav-catalog">
                    <NavLink to="/new" className="link-catalog">NEW</NavLink>
                    <NavLink to="/actu" className="link-catalog">ACTU</NavLink>
                    <NavLink to="/genres" className="link-catalog">GENRES</NavLink>
                    <NavLink to="/artists" className="link-catalog">ARTISTS</NavLink>
                    <NavLink to="/albums" className="link-catalog">ALBUMS</NavLink>
                </div>

                <div className="new-one">
                <div className="new"></div>
                <div className="new"></div>
                <div className="new"></div>
                <div className="new"></div>
                </div>
                <div className="new-one">
                <div className="new"></div>
                <div className="new"></div>
                <div className="new"></div>
                <div className="new"></div>
                </div>
                
               
                <div className="musicplayer">
                        <h1>Test</h1>
                    </div>
              
                </div>
             
                </div>
           
            
    );
}
}
