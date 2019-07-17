var tracks = require('../models/tracksAlbumsModel');


exports.displayTracksAlbums = function (req, res) {
    var request = [req.params.AlbumID]
        
        
    tracks.getAllTracksAlbums(request, function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};