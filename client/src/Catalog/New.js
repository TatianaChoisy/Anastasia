import React, { Component } from 'react';
import './New.css';
import { Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Jumbotron } from 'react-bootstrap';
//Navbar, Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

export default class New extends Component {
    constructor(props) {
        super(props);
        this.state = { music: [] };
    }




    render() {
        return (
                
                        <div className="New">
 
                            <Jumbotron className="jumbotron-navleft">
                                <h1 className="title-navleft">Anastasia</h1>
                        
                            <div className="couple">
                            
                                <img src="/assets/images/catalog.svg" className="logo" alt="home logo" />
                                <NavLink to="/catalog/new" className="navleft-link">Catalog</NavLink>
                            
                            </div>
                        
                            <div className="couple">
                            
                                <img src="/assets/images/playlist.svg" className="logo" alt="home logo" />
                                <NavLink to="/playlist" className="navleft-link">Playlist</NavLink>
                            
                            </div>
                        
                            <div className="couple">
                            
                                <img src="/assets/images/contact.svg" className="logo" alt="home logo" />
                                <NavLink to="/contact" className="navleft-link">Contact</NavLink>
                        </div>
                        
                            <div className="couple">
                                <img src="/assets/images/user.svg" className="logo" alt="home logo" />
                                <NavLink to="/account" className="navleft-link">Account</NavLink>
                        </div>
                        
                            <div className="couple">
                                <img src="/assets/images/signout.svg" className="logo" alt="home logo" />
                                <NavLink to="/signout" className="navleft-link">Sign Out</NavLink>
                        </div>
                        
                </Jumbotron>
                
                    <div className="navigation-catalog">
                    <div className="nav-catalog">
                                <NavLink to="/catalog/new" className="link-catalog">NEW</NavLink>
                                <NavLink to="/catalog/actu" className="link-catalog">ACTU</NavLink>
                                <NavLink to="/catalog/artists" className="link-catalog">ARTISTS</NavLink>
                                <NavLink to="/catalog/genres" className="link-catalog">GENRES</NavLink>
        
                    </div>
                </div>
                
               

            
                
                </div>
            
               
        )}
  
}

 
         
            

