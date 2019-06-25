import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Button.css';
//Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button


export default class ButtonHome extends Component {

    render() {
        return (
            <div className="buttons-home">
                <NavLink to="/about/"><button className="about">ABOUT US</button></NavLink>
                <NavLink to="/subscribe/"><button className="subscribe">SUBSCRIBE</button></NavLink>
            </div>

        );
    }
}
