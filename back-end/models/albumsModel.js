var mySQL = require('../database/db');

var albums = function (data) {
        this.AlbumID = data.AlbumID,
        this.NameAlbum = data.NameAlbum,
        this.ArtistID = data.ArtistID,
        this.GenreID = data.GenreID,
        this.ImageID = data.ImageID
}

albums.getAllAlbums = function (result) {

 
    mySQL.query('SELECT * from Albums INNER JOIN Images ON Images.ImageID = Albums.ImageID INNER JOIN Artists ON Artists.ArtistID = Albums.ArtistID ', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    })
   
    // mySQL.query('SELECT * from Tracks INNER JOIN Albums ON Albums.AlbumID = Tracks.AlbumID', function (err, res, fields) {
    //     if (err) throw err;
    //     result(null, res);
    // })

}

module.exports = albums;
