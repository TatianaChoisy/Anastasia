import React, { Component } from 'react';
import './Home.css';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default class Home extends Component {

    render() {
        return (
         
            <div className="Home">

                <Nav default collapseOnSelect className="navbar">
                    <NavLink to="/signup" className="button-align"><button className="signup-home">SIGN UP</button></NavLink>
                    <NavLink to="/signin" className="button-align"><button className="signin-home">SIGN IN</button></NavLink>
                </Nav>
                
                <div className="div-home">

                    <h1 className="title-home">Anastasia</h1>
                    <p className="first-paragraphe-home">Listen to your music, create your playlists, share them with others.</p>
                    <p className="second-paragraphe-home">Anastasia is probably the best streaming music platform, you can subscribe or listen for free.</p>
                    
                    <div className="button-home">
                        <NavLink to="/about/"><button className="about-home">ABOUT US</button></NavLink>
                        <NavLink to="/subscribe/"><button className="subscribe-home">SUBSCRIBE</button></NavLink>
                    </div>
                        
                </div>
                
            </div>
           
        );
    }
}
