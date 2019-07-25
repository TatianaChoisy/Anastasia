import React, { Component } from 'react';
import './Playlist.css';
import NavLeft from '../Catalog/Navigation/NavLeft';
import PlayerPlaylists from '../Players/PlayerPlaylists';

export default class Playlist extends Component {
    constructor(props) {
        super(props);
      this.state = {
        playlists: [],
        listen: ''
      };
  }
    
      playingPlaylist = (id) => {
        this.setState({
          listen: id
        })
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
                {this.state.playlists.map(playlists => {
                 return (
              
              <div key={playlists.PlaylistsTracksID} className="the-playlist" >
              <img className="image-playlist" key={playlists.PlaylistsTracksID} src={playlists.LinkImage} alt="image-playlist" onClick={() => this.playingPlaylist(playlists.PlaylistID)}/>
              <h1 className="name-playlist-playlist" key={playlists.NamePlaylist}>{playlists.NamePlaylist}</h1>
                         
                     </div>
                    
              
                 );
                 })}
              </div>
              <PlayerPlaylists getTracksPlaylists={this.state.listen} />
                    </div>
                </div>
            
                              
        )}
  
}

 
         
            

