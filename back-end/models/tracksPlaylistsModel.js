var mySQL = require('../database/db');

var tracks = function (data) {
        this.PlaylistsTracksID = data.PlaylistsTracksID,
        this.PlaylistID = data.PlaylistID,
        this.TrackID = data.TrackID
}

tracks.getAllTracksPlaylists = function (request, result) {
    var PlaylistsID = request;
    
    // J'utilise les 'placeholders' (?) pour échapper les valeurs insérées dans la requête
    mySQL.query('SELECT * from PlaylistsTracks INNER JOIN Tracks ON Tracks.TrackID = PlaylistsTracks.TrackID WHERE PlaylistID = 1', [PlaylistsID], function (err, res) {
        if (err) throw err;
        result(null, res);
    })


}

tracks.insertTrack = function (request, result) {
    var values = [request];
    
    // J'utilise les 'placeholders' (?) pour échapper les valeurs insérées dans la requête
    mySQL.query('INSERT INTO PlaylistsTracks (PlaylistID, TrackID) VALUES ?', [values], function (err, res) {
        if (err) throw err;
        result(null, res);
    })


}


module.exports = tracks;
