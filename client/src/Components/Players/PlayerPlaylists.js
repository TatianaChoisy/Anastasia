import React, { Component } from 'react';
import './PlayerPlaylists.css';

export default class PlayerPlaylists extends Component {
    constructor(props) {
        super(props);
        this.state = { playlists: [] };
}
            
    componentDidMount() {
        // toString() me permet de renvoyer une chaîne de caractères
        fetch('/tracksplaylists/' + this.props.getPlaylists.toString())
        .then(res => res.json())
        .then(playlists => this.setState({ playlists }));
    }

    componentDidUpdate(prevprops, prevstate) {
        if (prevprops.getPlaylists !== this.props.getPlaylists) {
            fetch('/tracksplaylists/' + this.props.getPlaylists.toString())
                .then(res => res.json())
                .then(playlists => this.setState({ playlists }));
        }
    }
    
    render() {
        
        return (
               
                 <div className="PlayerTracks">
                <audio controls className="audioplayer">
                    {this.state.playlists.map(function (playlists) { 
                        return (
                            <source src={playlists.PlaylistsTracksID} type="audio/mpeg"/>
                        )}
                    )}
                            
                 </audio>
    
                </div>
                
               
        )}
  
}

 
         
            

