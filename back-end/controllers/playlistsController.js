var playlists = require('../models/playlistsModel');


exports.Display_all_playlists = function (req, res) {
playlists.getAllPlaylists(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};