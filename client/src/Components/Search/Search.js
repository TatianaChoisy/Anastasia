import React, { Component } from 'react';
import './Search.css';
import NavLeft from '../Catalog/Navigation/NavLeft';
import { NavLink } from 'react-router-dom';

export default class Search extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        search: '',
                        result: ''
                };
                
                // .bind me permet de reconnaître this
                this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
                this.setState({
                        search: e.target.value
                // La fonction callback attend l'exécution de la première opération avant de se lancer
                }, function () {
                                e.preventDefault();
                         // Si la recherche n'est pas vide, alors on fait une requête HTTP
                                if (this.state.search !== '') {
                                // On précise le chemin de la requête en premier paramètre
                                        fetch('/search', {
                                        // On définit en second paramètre un objet qui va contenir trois propriétés
                                        method: 'POST', // On lui précise sa méthode
                                        headers: { 'Content-Type': 'application/json' }, // On lui précise que son type de contenu est en json
                                        body: JSON.stringify(this.state) // Sa propriété body aura comme valeur this.state transformé en json
                                        }).then(function (res) { // Il attend la réponse traitée et donnée par le back
                                         return res.json(); 
                                        }).then(data => this.setState({ result: data }, console.log(this.state.result))
                                        ).catch(function (err) {
                                        console.log(err);
                                });
                        }   
                                
                })
                
        }

        render() {
                if (this.state.result === '') {
                        return (
                                <div className="Search">
                                                
                                <NavLeft />
                                <div className="column-search">
                              
                                                <div className="searchbar">
                                                <input type="text" name="search" placeholder="Search in Anastasia..." className="search-txt" onChange={this.handleChange} ></input>
                                                </div>
                                                
                                       
                                        </div>
                                
                                </div>
                        )
                }
                else {
                        return (
                                <div className="Search">
                                <NavLeft />
                                <div className="column-search">
                              
                                                <div className="searchbar">
                                                <input type="text" name="search" placeholder="Search in Anastasia..." className="search-txt" onChange={this.handleChange} ></input>
                                                </div>
                                                
                                       
                                       
                                        
                                <div className="result">
                                {this.state.result.map(result => {
                                        return (
                                                        
                                                        <div key={result.ArtistID} className="result-search">
                                                                <img className="image-artist-search" key={result.AlbumID} src={result.ImageArtist} alt="image-album" />
                                                                <NavLink to={result.NameArtist.replace(/\s+/g, '').replace(/'/g, '').replace(/[ö]/g, 'o')}><p className="name-artist-search" key={result.NameArtist}>{result.NameArtist}</p></NavLink>
                                                        </div>
                                                   
                                                       
                                                       
                               
                                        )
                                })}
                                </div>
                                </div>
                                </div>
                                                
                                )

                } 
                                
        }
}

         
            

