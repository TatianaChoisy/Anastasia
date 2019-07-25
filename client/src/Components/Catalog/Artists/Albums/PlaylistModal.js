import React, { Component } from 'react';
import './PlaylistModal.css';


export default class Currents extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
}
    
choosePlaylist = (PlaylistID) => {
    console.log(PlaylistID);
    console.log(this.props.trackID);
    fetch('/tracksplaylists/addTrack', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
           trackID: this.props.trackID,
           playlistID: PlaylistID
        })
    }).then(function (res) {
        console.log(res);
    }).catch(function (err) {
        console.log(err);
    });
}

hideModal = () => {
    this.props.hideModal(false);
}

componentDidMount() {

}
    
    
    render() {
        
        return (
               
            <div className="modal-wrapper">
                {this.props.playlists.map(playlists => {
                 return (
              
              <div key={playlists.PlaylistsTracksID} className={playlists.PlaylistsTracksID} >
              <h1 className="name-playlist" key={playlists.NamePlaylist} onClick={() => this.choosePlaylist(playlists.PlaylistID)}>{playlists.NamePlaylist}</h1>
              <button onClick={() => this.hideModal()}>X</button>
                         
                     </div>
                    
              
                 );
                 })}
            </div>
                
               
        )}
  
}

 