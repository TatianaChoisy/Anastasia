import React, { Component } from 'react';
import './Search.css';
import NavLeft from '../Catalog/Navigation/NavLeft';
export default class Search extends Component {

    render() {
        return (
                
            <div className="Search">
                
                <NavLeft />
                <div className="column-search">
              
                <div class="search-box">
            <input type="text" placeholder="Search in Anastasia..." class="search-txt"></input>
            <a class="search-btn">
                    <img src="/assets/images/search-black.svg" className="img-search"/>
            </a>
             </div>
             </div>
            
                
                </div>
            
               
        )}
  
}

 
         
            

