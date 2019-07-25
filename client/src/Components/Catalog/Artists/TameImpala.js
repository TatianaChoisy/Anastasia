import React, { Component } from 'react';
import './TameImpala.css';
import NavLeft from '../Navigation/NavLeft';
import PlayerAlbums from '../../Players/PlayerAlbums';
import { NavLink } from 'react-router-dom';

export default class TameImpala extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            listen: ''};
}
    
playingAlbum = (id) => {
    this.setState({
      listen: id
    })
  }    
    
    
componentDidMount() {
fetch('/tameimpala')
.then(res => res.json())
.then(albums => this.setState({ albums }));
}
    
    render() {
        return (
                
            <div className="TameImpala">
                <NavLeft/>
                    <div className="column-tame-impala">
                    <div className="tame-impala-wallpaper">
                    <div className="description-row">
                        <h1 className="tame-impala-title">Tame Impala</h1>
                        <p className="little-title">Tame Impala (Kevin Parker) has released "Patience," the first new music since his GRAMMY nominated, RIAA Gold-Certified 2015 release, Currents. "Patience" is a mid-tempo chugger of 70's disco and 90's house, stoned on the house-made Tame Impala lysergic liquor. A jubilant, confident cut of elegant piano jabs, driving disco drums and Parker's inimitable vocal style. </p>
                        </div>
                                            
                </div>
                    <h1 className="title-albums">Albums</h1>
                    <div className="albums-list">
                {this.state.albums.map(albums => {
              return (
        
                
                  <div key={albums.AlbumID} className="column-albums">
                      <img className="image-album" key={albums.ArtistID} src={albums.LinkImage} alt="image-album" onClick={() => this.playingAlbum(albums.AlbumID)} />
                      <NavLink to={albums.NameAlbum.replace(/\s+/g, '').replace(/'/g, '').replace(/[ö]/g, 'o')}><h1 className="name-album" key={albums.NameAlbum}>{albums.NameAlbum}</h1></NavLink>
                      </div>
               
             
              );

                })}
                    </div>
                    <PlayerAlbums getTracksAlbums={this.state.listen} />
            </div>

                </div>
                    

               
            
               
        )}
  
}

 
         
            

