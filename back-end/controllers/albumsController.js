var albums = require('../models/albumsModel');


exports.Display_all_albums = function (req, res) {
albums.getAllAlbums(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};