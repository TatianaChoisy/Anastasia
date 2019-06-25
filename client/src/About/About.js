import React, { Component } from 'react';
import './About.css';
// import Home from '../Home/Home';
// import Signup from '../Signup/Signup';
// import Signin from '../Signin/Signin';
// import Subscribe from '../Subscribe/Subscribe';
// import HeaderAbout from '../Header/HeaderAbout';
// import Button from '../Button/Button';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Jumbotron } from 'react-bootstrap';

export default class About extends Component {

    render() {
        return (
                <div className="About">
                    {/* <Router>
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Signin} />
                    <HeaderAbout />
                    </Router> */}
                
                    <Jumbotron className="jumbotron-about">
                        <h1 className="title-about">About Us</h1>
                        <p className="paragraphe-about">
                            With Anastasia, it’s easy to find the right music or podcast for every<br></br>moment – on your phone, your computer, your tablet and more.<br></br><br></br>
                            There are millions of tracks and episodes on Anastasia. So whether<br></br> you’re behind the wheel, working out, partying or relaxing, the right<br></br>
                            music or podcast is always at your fingertips. Choose what you<br></br> want to listen to, or let Spotify surprise you.<br></br><br></br>
                            You can also browse through the collections of friends, artists, and<br></br> celebrities, or create a radio station and just sit back.<br></br><br></br>
                            Soundtrack your life with Anastasia. Subscribe or listen for free.
                        </p>
                    
                        {/* <Router>
                        <Route path="/about" component={About} />
                        <Route path="/subscribe" component={Subscribe} />
                        <Button />
                        </Router> */}

                    </Jumbotron>
                
                </div>
        
        );
    }
}
