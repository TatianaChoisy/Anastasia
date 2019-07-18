var mySQL = require('../database/db');

var playlists = function (data) {
        this.PlaylistsTracksID = data.PlaylistsTracksID,
        this.PlaylistID = data.PlaylistID,
        this.TrackID = data.TrackID
}

playlists.getAllPlaylists = function (result) {
    mySQL.query('SELECT * from Playlists INNER JOIN Images ON Images.ImageID = Playlists.ImageID WHERE Playlists.UserID = 1', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    })

}

module.exports = playlists;
