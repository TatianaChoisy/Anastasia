import React, { Component } from 'react';
import './PlayerAlbums.css';

export default class PlayerAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = { tracks: [] };
}
            
    componentDidMount() {
        // toString() me permet de renvoyer une chaîne de caractères
        fetch('/tracksalbums/' + this.props.getTracks.toString())
        .then(res => res.json())
        .then(tracks => this.setState({ tracks }));
    }

    componentDidUpdate(prevprops, prevstate) {
        if (prevprops.getTracks !== this.props.getTracks) {
            fetch('/tracksalbums/' + this.props.getTracks.toString())
                .then(res => res.json())
                .then(tracks => this.setState({ tracks }));
        }
    }
    
    render() {
        
        return (
               
                 <div className="PlayerAlbums">
                <audio controls className="audioplayer">
                    {this.state.tracks.map(function (tracks) { 
                        return (
                            <source src={tracks.LinkTrack} type="audio/mpeg"/>
                        )}
                    )}
                            
                 </audio>
    
                </div>
                
               
        )}
  
}

 
         
            

