import React, { Component } from 'react';
import './PlayerAlbums.css';

export default class PlayerAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            currentTrackID : ''
        };
}
            
    componentDidMount() {
        console.log(this.props.getTracks);
        // toString() me permet de renvoyer une chaîne de caractères
        fetch('/tracksalbums/' + this.props.getTracks.toString())
        .then(res => res.json())
        .then(tracks => this.setState({ tracks }, function() { console.log(this.state.tracks)}));
        
    }
    

    componentDidUpdate(prevprops, prevstate) {
        console.log(prevprops.getTracks)
        if (prevprops.getTracks !== this.props.getTracks) {
            fetch('/tracksalbums/' + this.props.getTracks.toString())
                .then(res => res.json())
                .then(tracks => this.setState({
                    tracks: tracks
                }, function () {
                    this.setState({
                        currentTrackID: tracks[0].TrackID
                    }, function () {
                        console.log(this.state)
                        document.getElementById('player').load();
                    }
                    )
                
                }
                    ))
    };
        
    
        }
    

    handlePrevious = () => {
        // if (document.getElementById('player').id === "Track-1") {

        //  else {
            var previousTrack = parseInt(this.state.currentTrackID) - 1;
            document.getElementById('player').src = this.state.tracks[previousTrack].LinkTrack;
            this.setState({ currentTrackID : previousTrack })
            document.getElementById('player').load();
            document.getElementById('player').play();
        
    }

    handleNext= () => {
        // if (document.getElementById('player').id === "Track-1") {

        //  else {
        
            var nextTrack = parseInt(this.state.currentTrackID) + 1;
            document.getElementById('player').src = this.state.tracks[nextTrack].LinkTrack;
            this.setState({ currentTrackID : nextTrack })

            document.getElementById('player').load();
            document.getElementById('player').play();
        
    }
    
    render() {
        
        return (
               
                 <div className="PlayerAlbums">
                <audio controls className="audioplayer" id="player">
                    {this.state.tracks.map(function (tracks) { 
                        return (
                            
                            <source key={tracks.TrackID} src={tracks.LinkTrack} type="audio/mpeg" id={"Track-" + tracks.TrackID}/>
                        )}
                    )}
                            
                </audio>
                    <button><img src="/assets/player/previous.svg" className="icons" onClick={() => this.handlePrevious()}/></button>
                    <button><img src="/assets/player/next.svg" className="icons"onClick={() => this.handleNext()}/></button>
    
                </div>
                
               
        )}
  
}

 
         
            

