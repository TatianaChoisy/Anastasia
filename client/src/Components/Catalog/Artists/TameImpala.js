import React, { Component } from 'react';
import './TameImpala.css';
import { NavLink } from 'react-router-dom';
import NavLeft from '../Navigation/NavLeft';

export default class TameImpala extends Component {
    constructor(props) {
        super(props);
        this.state = { artists: [] };
}
    
componentDidMount() {
fetch('/artists/albums')
.then(res => res.json())
.then(artists => this.setState({ artists }));
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
                {this.state.artists.map(artists => {
              return (
        
               
                  <div key={artists.AlbumID} >
                  
                  <img className="image-album" key={artists.ArtistID} src={artists.LinkImage} alt="image-album" onClick={() => this.playingAlbum(artists.AlbumID)} />
                  <h1 className="name-album" key={artists.NameAlbum}>{artists.NameAlbum}</h1>
            
                </div>
             
              );

            })}
            </div>

                </div>
                    

               
            
               
        )}
  
}

 
         
            

