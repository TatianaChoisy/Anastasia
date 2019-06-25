import React from 'react';
//Nav, NavItem, Jumbotron, Grid, Row, Col, Image, Button

function Header() {
    return (
        <div className="Header">
            <ul className="header-list">
            <li className="list-header">Home</li>
            <li className="list-header">Search</li>
            <li className="list-header">Library</li>
            <li className="list-header">Contact</li>
            <li className="list-header">User</li>
        <li>Log Out</li>
        </ul>
        </div>

    );
}

export default Header;