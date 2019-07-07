import React, { Component } from 'react';
import './NavLeft.css';
import { NavLink } from 'react-router-dom';

export default class NavLeft extends Component {

    render() {
        return (
                
                       
 
                            <div className="navleft">
                                <h1 className="title-navleft">Anastasia</h1>
                        
                            <div className="couple">
                            
                                <img src="/assets/images/catalog.svg" className="logo" alt="home logo" />
                                <NavLink to="/catalog" className="navleft-link">Catalog</NavLink>
                            
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
                        
                </div>
            
                
              
            
               
        )}
  
}

 
         
            

