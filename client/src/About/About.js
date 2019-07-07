import React, { Component } from 'react';
import './About.css';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class About extends Component {

    render() {
        return (
            <div className="About">

                <Navbar default collapseOnSelect>
                    <NavLink to="/signup" className="button-align"><button className="signup-about">SIGN UP</button></NavLink>
                    <NavLink to="/signin" className="button-align"><button className="signin-about">SIGN IN</button></NavLink>
                </Navbar>

                <div className="div-about">

                    <h1 className="title-about">About Us</h1>
                    <p className="paragraphe-about">
                            With Anastasia, it’s easy to find the right music or podcast for every<br></br>moment – on your phone, your computer, your tablet and more.<br></br><br></br>
                            There are millions of tracks and episodes on Anastasia. So whether<br></br> you’re behind the wheel, working out, partying or relaxing, the right<br></br>
                            music or podcast is always at your fingertips. Choose what you<br></br> want to listen to, or let Spotify surprise you.<br></br><br></br>
                            You can also browse through the collections of friends, artists, and<br></br> celebrities, or create a radio station and just sit back.<br></br><br></br>
                            Soundtrack your life with Anastasia. Subscribe or listen for free.
                        </p>
      
                    <div className="button-about">
                    <NavLink to="/subscribe/"><button className="subscribe-about">SUBSCRIBE</button></NavLink>
                    <NavLink to="/" className="button-align"><button className="home-about">BACK TO HOME</button></NavLink>
                    </div>

                    

                    </div>
                
                </div>
        
        );
    }
}
