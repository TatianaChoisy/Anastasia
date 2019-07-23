// Le controller appelle le model
var currents = require('../models/currentsModel');

// Je définis et exporte la méthode displayAllCurrentsTracks qui sera utilisée par la route
exports.displayAllCurrentsTracks = function (req, res) {
currents.getAllCurrentsTracks(function (err, data) {
    if (err) {
        res.send(err);
    }
    else {
        res.json(data);
    }
})
    
};