// Le controller appelle le model
var albums = require('../models/albumsModel');

// Je définis et exporte la méthode displayAllAlbums qui sera utilisée par la route
exports.displayAllAlbums = function (req, res) {

// J'utilise la méthode getAllAlbums définie dans le model
albums.getAllAlbums(function (err, data) {
        if (err) res.send(err);
        else res.json(data);
    })

};