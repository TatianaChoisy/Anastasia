// Le controller appelle le model
var tameimpala = require('../models/tameimpalaModel');

// Je définis et exporte la méthode displayAllTameImpalaAlbums qui sera utilisée par la route
exports.displayAllTameImpalaAlbums = function (req, res) {
tameimpala.getAllTameImpalaAlbums(function (err, data) {
    if (err) {
        res.send(err);
    }
    else {
        res.json(data);
    }
})
    
};