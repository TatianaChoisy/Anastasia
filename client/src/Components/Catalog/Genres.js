import React, { Component } from 'react';
import './Genres.css';
import { NavLink } from 'react-router-dom';
import NavLeft from './Navigation/NavLeft';

export default class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = { genres: [] };
}
            
    componentDidMount() {
        fetch('/genres')
        .then(res => res.json())
        .then(genres => this.setState({ genres }));
}

    render() {
        return (
                
                        <div className="GenresPage">
 
                            <NavLeft/>
                            <div className="column">
                            <div className="navigation">
                                <NavLink to="/new" className="link-catalog">NEW</NavLink>
                                <NavLink to="/actu" className="link-catalog">ACTU</NavLink>
                                <NavLink to="/albums" className="link-catalog">ALBUMS</NavLink>
                                <NavLink to="/genres" className="link-catalog">GENRES</NavLink>
        
                            </div> 
              
                          
                            <div className="Genres">
                {this.state.genres.map(function (genres) {
                return (
              
              <div key={genres.GenreID} className={genres.GenreID} >
                <p className="name-genre" key={genres.NameGenre}>{genres.NameGenre}</p>
              </div>
              
          );
        })}
        </div>
                        </div>
                
                             </div>
            
               
        )}
  
}

 
         
            

