var mySQL = require('../database/db');

var tracks = function (data) {
        this.TrackID = data.TrackID,
        this.NameTrack = data.NameTrack,
        this.LinkTrack = data.LinkTrack,
        this.AlbumID = data.AlbumID
}

tracks.getAllTracksAlbums = function (request, result) {
    var AlbumID = request;
    
    // J'utilise les 'placeholders' (?) pour échapper les valeurs insérées dans la requête
    mySQL.query('SELECT * from Tracks WHERE Tracks.AlbumID = ?', [AlbumID], function (err, res) {
        if (err) throw err;
        result(null, res);
    })


}

module.exports = tracks;
