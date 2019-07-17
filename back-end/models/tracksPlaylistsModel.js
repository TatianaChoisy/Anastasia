var mySQL = require('../database/db');

var tracks = function (data) {
        this.PlaylistsTracksID = data.PlaylistsTracksID,
        this.PlaylistID = data.PLaylistID,
        this.TrackID = data.TrackID
}

tracks.getAllTracksAlbums = function (request, result) {
    var PlaylistsTracksID = request;
    
    // J'utilise les 'placeholders' (?) pour échapper les valeurs insérées dans la requête
    mySQL.query('SELECT * from PlaylistsTracks WHERE PlaylistsTracks.TracksID = ?', [AlbumID], function (err, res) {
        if (err) throw err;
        result(null, res);
    })


}

module.exports = tracks;
