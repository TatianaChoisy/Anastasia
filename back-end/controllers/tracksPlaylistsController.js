var tracks = require('../models/tracksPlaylistsModel');


exports.displayTracksPlaylists = function (req, res) {
    var request = [req.params.PlaylistsTracksID]
        
        
    tracks.getAllTracksPlaylists(request, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};