var mySQL = require('../database/db');

// Object constructor
var albums = function (data) {
        this.AlbumID = data.AlbumID,
        this.NameAlbum = data.NameAlbum,
        this.ArtistID = data.ArtistID,
        this.GenreID = data.GenreID,
        this.ImageID = data.ImageID
}

// La méthode getAllAlbums va faire une requête à la base de données via l'import de mySQL
albums.getAllAlbums = function (result) {

    mySQL.query('SELECT * from Albums INNER JOIN Images ON Images.ImageID = Albums.ImageID INNER JOIN Artists ON Artists.ArtistID = Albums.ArtistID ',
        function (err, res) {
            if (err) throw err;
            result(null, res);
        })
        
   
}

module.exports = albums;
