import React, { Component } from 'react';
import './Account.css';
import { Jumbotron } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Jumbotron } from 'react-bootstrap';
//Navbar, Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state = { music: [] };
    }

  



    render() {
        return (
                
                        <div className="Account">
 
                            <Jumbotron className="jumbotron-navleft">
                                <h1 className="title-navleft">Anastasia</h1>
                        
                            <div className="couple">
                            
                                <img src="/assets/images/catalog.svg" className="logo" alt="home logo" />
                                <NavLink to="/catalog/new" className="navleft-link">Catalog</NavLink>
                            
                    </div>
                    
                    <div className="couple">
                            
                            <img src="/assets/images/search.svg" className="logo" alt="home logo" />
                            <NavLink to="/search" className="navleft-link">Search</NavLink>
                        
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
                
          
                
               

            
                
                </div>
            
               
        )}
  
}

 
         
            

