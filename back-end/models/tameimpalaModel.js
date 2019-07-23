var mySQL = require('../database/db');

// Object constructor
var albums = function (data) {
        this.AlbumID = data.AlbumID,
        this.NameAlbum = data.NameAlbum,
        this.ArtistID = data.ArtistID,
        this.GenreID = data.GenreID,
        this.ImageID = data.ImageID
}

albums.getAllTameImpalaAlbums = function (result) {
 
    mySQL.query('SELECT * FROM Albums INNER JOIN Images ON Images.ImageID = Albums.ImageID WHERE Albums.ArtistID = 1', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    })


}

module.exports = albums;
