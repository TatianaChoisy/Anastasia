var mySQL = require('../database/db');

var playlists = function (data) {
        this.PlaylistsTracksID = data.PlaylistsTracksID,
        this.PlaylistID = data.PlaylistID,
        this.TrackID = data.TrackID
}

playlists.getAllPlaylists = function (result) {
    mySQL.query('SELECT * from PlaylistsTracks INNER JOIN Playlists ON Playlists.PlaylistID = PlaylistsTracks.PlaylistID INNER JOIN Tracks ON Tracks.TrackID = PlaylistsTracks.TrackID INNER JOIN Images ON Images.ImageID = Playlists.ImageID', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    })
   
    // mySQL.query('SELECT * from Tracks INNER JOIN Albums ON Albums.AlbumID = Tracks.AlbumID', function (err, res, fields) {
    //     if (err) throw err;
    //     result(null, res);
    // })

}

module.exports = playlists;
