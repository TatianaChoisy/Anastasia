import React, { Component } from 'react';
import './Albums.css';
import { NavLink } from 'react-router-dom';
import NavLeft from './Navigation/NavLeft';
import Player from './Player';

export default class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [] };
      }
    
      componentDidMount() {
        fetch('/albums')
          .then(res => res.json())
          .then(albums => this.setState({ albums }));
      }

    render() {
        return (
               
            <div className="AlbumsPage">

                <NavLeft/>
                    <div className="column">
                    <div className="navigation">
                                <NavLink to="/new" className="link-catalog">NEW</NavLink>
                                <NavLink to="/actu" className="link-catalog">ACTU</NavLink>
                                <NavLink to="/albums" className="link-catalog">ALBUMS</NavLink>
                                <NavLink to="/genres" className="link-catalog">GENRES</NavLink>
                               
                    </div> 
                   
        <div className="Albums">
        {this.state.albums.map(function (albums) {
          return (
              
              <div key={albums.AlbumID} className={albums.AlbumID} >
              <img className="image-album" key={albums.AlbumID} src={albums.LinkImage} alt="image-album"/>
                <h1 className="name-album" key={albums.NameAlbum}>{albums.NameAlbum}</h1>
                <p className="name-artist" key={albums.NameArtist}>{albums.NameArtist}</p>
                <p className="genre-album" key={albums.NameGenre}>{albums.NameGenre}</p>
              </div>
              
          );
        })}

      </div>
                    <Player/>
                    </div>
                    
                    </div>
                
               
        )}
  
}

 
         
            

