import React, { Component } from 'react';
import './PlayerPlaylists.css';

export default class PlayerPlaylists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            currentTrackIndex : ''
        };
}
            
    componentDidMount() {
        // toString() me permet de renvoyer une chaîne de caractères
        // fetch('/trackplaylists/' + this.props.getPlaylists.toString())
        // .then(res => res.json())
        // .then(tracks => this.setState({ tracks }, function() { console.log(this.state.tracks)}));
        
    }
    

    componentDidUpdate(prevprops, prevstate) {
        console.log(prevprops.getTracksPlaylists)
        if (prevprops.getTracksPlaylists !== this.props.getTracksPlaylists) {
            fetch('/tracksplaylists/' + this.props.getTracksPlaylists.toString())
                .then(res => res.json())
                .then(tracks => this.setState({
                    tracks: tracks
                }, function () {
                    this.setState({
                        currentTrackIndex : 0,
                       
                    }, function () {
                        console.log(this.state);
                        document.getElementById('player').src = tracks[0].LinkTrack;
                        document.getElementById('player').load();
                        document.getElementById('player').play();
                    }
                    )
                
                }
                    ))
    };
        
    
        }
    

    handlePrevious = () => {
        // if (document.getElementById('player').id === "Track-1") {

        //  else {
            var previousTrack = this.state.currentTrackIndex - 1;
            document.getElementById('player').src = this.state.tracks[previousTrack].LinkTrack;
            this.setState({ currentTrackIndex : previousTrack })
            document.getElementById('player').load();
            document.getElementById('player').play();
        
    }

    handleNext= () => {
        // if (document.getElementById('player').id === "Track-1") {

        //  else {
        
            var nextTrack = this.state.currentTrackIndex + 1;
            document.getElementById('player').src = this.state.tracks[nextTrack].LinkTrack;
            this.setState({ currentTrackIndex : nextTrack })

            document.getElementById('player').load();
            document.getElementById('player').play();
        
    }
    
    render() {
        
        return (
               
                 <div className="PlayerAlbums">
                <audio controls className="audioplayer" id="player">
                    {this.state.tracks.map(tracks => {
                        return (
                            
                            <source key={tracks.TrackID} src={tracks.LinkTrack} type="audio/mpeg" id={"Track-" + tracks.TrackID} />
                        )
                    }
                    )}
                            
                </audio>
                    <button><img src="/assets/player/previous.svg" className="icons" onClick={() => this.handlePrevious()}/></button>
                    <button><img src="/assets/player/next.svg" className="icons"onClick={() => this.handleNext()}/></button>
    
                </div>
                
               
        )}
  
}

 
         
            

