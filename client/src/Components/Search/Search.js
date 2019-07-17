import React, { Component } from 'react';
import './Search.css';
import NavLeft from '../Catalog/Navigation/NavLeft';
export default class Search extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        search: '',
                        result: ''
                };

                this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e) {
                const { value, name } = e.target;
                this.setState({
                        [name]: value
                // La fonction callback attend l'exécution de la première opération avant de se lancer
                }, function () {
                        e.preventDefault();
                        if (this.state.search !== '') {
                                fetch('/search', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify(this.state)
                                }).then(function (res) {
                                         return res.json();
                                }).then(response => this.setState({ result: response }, console.log(this.state.result))
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
                                                                <p className="name-artist-search" key={result.NameArtist}>{result.NameArtist}</p>
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

         
            

