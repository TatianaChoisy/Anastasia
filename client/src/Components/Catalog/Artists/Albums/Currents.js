import React, { Component } from 'react';
import './Currents.css';
import NavLeft from '../../Navigation/NavLeft';
import PlayerAlbums from '../../../Players/PlayerAlbums';
import PlaylistModal from './PlaylistModal';

export default class Currents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            tracks: [],
            playlists: [],
            showModal : false,
            trackID : '',
            listen: ''
        };
}
            
playingAlbum = (id) => {
    this.setState({
      listen: id
    })
  }    
  

showPlaylists = (TrackID) => {
    var userID = localStorage.getItem('userID');
    this.setState({trackID :TrackID});
    fetch('/playlists/'+userID)
          .then(res => res.json())
          .then(playlists => this.setState({ playlists : playlists }, this.setState({showModal : true})));
}

closeModal = () => {
    this.setState({showModal : false})
}
    
componentDidMount() {
    fetch('/currents')
    .then(res => res.json())
    .then(tracks => this.setState({ tracks }));
}
    
    
    render() {
        
        return (
               
            <div className="Currents">
                <NavLeft />
                <div className="left-currents">
                    <div className="column-currents">
                <img src="/assets/albums/currents.jpg" alt="album currents" className="currents-jacket"  />
                    <h1 className="big-title-currents">Currents</h1>
                    </div>
                <div className="name-link-album">
                {(this.state.showModal) ? <PlaylistModal playlists={this.state.playlists} trackID={this.state.trackID} hideModal={() => this.closeModal()}></PlaylistModal> : null }
                {this.state.tracks.map((tracks) => { 
                        return (
                            <div className="album-currents">
                                <div className="row-currents">
                            <img src="/assets/images/playy.svg" className="play" alt="track Currents" onClick={() => this.playingAlbum(tracks.AlbumID)} />
                            <img src="/assets/images/plus.svg" className="plus" onClick={() => this.showPlaylists(tracks.TrackID)}/>
                            <h6 className="title-currents" key={tracks.TrackID} src={tracks.NameTrack} >{tracks.NameTrack}</h6>
                            
                            </div>
                            
                            
                            </div>
                        )}
                    )}
                    </div>
                    <PlayerAlbums getTracksAlbums={this.state.listen} />
                    </div>
                </div>
                
               
        )}
  
}

 
         
            

