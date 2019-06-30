import React, { Component, Fragment } from 'react';
import './Albums.css';

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidMount() {
    fetch('/albums')
      .then(res => res.json())
      .then(albums => this.setState({ albums }));
  }




  render() {
    return (
      <div className="albums">
        {this.state.albums.map(function (albums) {
            return (
              <div key={albums.AlbumID} className={albums.AlbumID} >
              <img className="image-album" key={albums.AlbumID} src={albums.LinkImage} alt="image-album"></img>
                <h1 className="name-album" key={albums.NameAlbum}>{albums.NameAlbum}</h1>
                <p className="name-artist" key={albums.NameArtist}>{albums.NameArtist}</p>
                <p className="genre-album" key={albums.NameGenre}>{albums.NameGenre}</p>
              </div>
              
          );
        })}

      </div>

    );
  }
}
