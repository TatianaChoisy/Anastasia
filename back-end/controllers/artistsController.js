// Le controller appelle le model
var artists = require('../models/artistsModel');


exports.displayAllArtists = function (req, res) {
artists.getAllArtists(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
})



};

exports.displayAllArtistsAlbums = function (req, res) {
    artists.getAllArtistsAlbums(function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
    })
    
    
    
    };