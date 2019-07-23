import React, { Component } from 'react';
import './Currents.css';
import NavLeft from '../../Navigation/NavLeft';
import PlayerAlbums from '../../../Players/PlayerAlbums';

export default class Currents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            tracks: [],
            listen: ''
        };
}
            
playingAlbum = (id) => {
    this.setState({
      listen: id
    })
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
                <img src="/assets/albums/currents.jpg" alt="album currents" className="currents-jacket" />
                    <h1 className="big-title-currents">Currents</h1>
                    <h2 className="big-title-currents">Tame Impala</h2>
                    </div>
                <div className="name-link-album">
                        {this.state.tracks.map((tracks) => { 
                        {console.log(this)}
                        return (
                            <div className="album-currents">
                                <div className="row-currents">
                                <img src="/assets/images/playy.svg" className="play" alt="track Currents" onClick={() => this.playingAlbum(tracks.AlbumID)}  />
                            <img src="/assets/images/plus.svg" className="plus" />
                            <h6 className="title-currents" key={tracks.TrackID} src={tracks.NameTrack}>{tracks.NameTrack}</h6>
                            
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

 
         
            

