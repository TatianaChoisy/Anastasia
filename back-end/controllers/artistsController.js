var artists = require('../models/artistsModel');


exports.Display_all_artists = function (req, res) {
artists.getAllArtists(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};