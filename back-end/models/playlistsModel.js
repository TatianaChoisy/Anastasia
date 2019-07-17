var mySQL = require('../database/db');

var playlists = function (data) {
        this.PlaylistsTracksID = data.PlaylistsTracksID,
        this.PlaylistID = data.PlaylistID,
        this.TrackID = data.TrackID
}

playlists.getAllPlaylists = function (result) {
    mySQL.query('SELECT * from PlaylistsTracks INNER JOIN Playlists ON Playlists.PlaylistID = PlaylistsTracks.PlaylistID INNER JOIN Images ON Images.ImageID = Playlists.ImageID', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    })

}

module.exports = playlists;