import React, { Component } from 'react';
import './Albums.css';
import { NavLink } from 'react-router-dom';
import NavLeft from './Navigation/NavLeft';
import PlayerAlbums from '../Players/PlayerAlbums';

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      listen: ''
    };
      
  }
  
  playingAlbum = (id) => {
    this.setState({
      listen: id
    })
  }
    
  componentDidMount() {
    fetch('/albums')
      .then(res => res.json())
      .then(albums => this.setState({ albums: albums }));
        
        
  }


  render() {
      

    return (
               
      <div className="AlbumsPage">

        <NavLeft />
        <div className="column">
          <div className="navigation">
            <NavLink to="/new" className="link-catalog">NEW</NavLink>
            <NavLink to="/actu" className="link-catalog">ACTU</NavLink>
            <NavLink to="/albums" className="link-catalog">ALBUMS</NavLink>
            <NavLink to="/genres" className="link-catalog">GENRES</NavLink>
                               
          </div>
        <div className="Albums">
            {this.state.albums.map(albums => {
              return (
        
       
                <div key={albums.AlbumID} >
                  <img className="image-album" key={albums.AlbumID} src={albums.LinkImage} alt="image-album" onClick={() => this.playingAlbum(albums.AlbumID)} />
                  <h1 className="name-album" key={albums.NameAlbum}>{albums.NameAlbum}</h1>
                  <NavLink to={albums.NameArtist.replace(/\s+/g, '').replace(/'/g, '').replace(/[ö]/g, 'o')}><p className="name-artist" key={albums.NameArtist}>{albums.NameArtist}</p></NavLink>
            
                </div>
             
              );

            })}
          </div>
          <PlayerAlbums getTracks={this.state.listen} />
        </div>
              
      </div>
                
               
    )
  }
}