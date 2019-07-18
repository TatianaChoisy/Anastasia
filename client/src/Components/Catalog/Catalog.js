import React, { Component } from 'react';
import './Catalog.css';
import { NavLink } from 'react-router-dom';
import NavLeft from './Navigation/NavLeft';

export default class Catalog extends Component {
        constructor(props) {
                super(props);
                this.state = { artists: [] };
}
            
componentDidMount() {
        fetch('/artists')
        .then(res => res.json())
        .then(artists => this.setState({ artists }));
}

    render() {
        return (
                
                     <div className="Catalog">

                        <NavLeft/>
                        <div className="column">
                        <div className="navigation">
                                <NavLink to="/new" className="link-catalog">NEW</NavLink>
                                <NavLink to="/actu" className="link-catalog">ACTU</NavLink>
                                <NavLink to="/albums" className="link-catalog">ALBUMS</NavLink>
                                <NavLink to="/genres" className="link-catalog">GENRES</NavLink>

                                </div>
                       

                <div className="Artists">
                {this.state.artists.map(function (artists) {
                return (
              
              <div key={artists.ArtistID} className="artists-catalog" >
                                <img className="image-artist" key={artists.ArtistID} src={artists.ImageArtist} alt="Artist Image" />
                                <p className="artist-name" key={artists.NameArtist}>{artists.NameArtist}</p>
                                <p className="artist-bio" key={artists.BioArtist}>{artists.BioArtist}</p>
                                <NavLink to={artists.NameArtist.replace(/\s+/g, '').replace(/'/g, '').replace(/[ö]/g, 'o')}><button className="button-catalog">PROFIL</button></NavLink>
                              
              </div>
              
          );
        })}

                        </div>
                </div>
                      </div>
            
               
        )}
  
}

 
         
            

