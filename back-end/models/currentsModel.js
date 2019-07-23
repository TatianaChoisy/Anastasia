var mySQL = require('../database/db');

// Object constructor
var albums = function (data) {
        this.TrackID = data.TrackID,
        this.NameTrack = data.NameTrack,
        this.LinkTrack = data.LinkTrack,
        this.AlbumID = data.AlbumID
}

albums.getAllCurrentsTracks = function (result) {
 
    mySQL.query('SELECT * FROM Tracks WHERE AlbumID = 1', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    })


}

module.exports = albums;
