import React, { Component } from 'react';
import './Playlist.css';
import NavLeft from '../Catalog/Navigation/NavLeft';

export default class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = { playlists: [] };
      }
    
      componentDidMount() {
        fetch('/playlists')
          .then(res => res.json())
          .then(playlists => this.setState({ playlists }));
      }

    render() {
        return (
                 <div className="Playlist">
                
                <NavLeft />
                <div className="column-column">
                <div className="column-playlist">
                {this.state.playlists.map(function (playlists) {
                 return (
              
              <div key={playlists.PlaylistsTracksID} className={playlists.PlaylistsTracksID} >
              <img className="image-playlist" key={playlists.PlaylistsTracksID} src={playlists.LinkImage} alt="image-album"/>
                         <h1 className="name-playlist" key={playlists.NamePlaylist}>{playlists.NamePlaylist}</h1>
                         
                     </div>
                    
              
                 );
                 })}
                </div>
                    </div>
                </div>
            
                              
        )}
  
}

 
         
            

