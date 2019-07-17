var genres = require('../models/genresModel');


exports.displayAllGenres = function (req, res) {
genres.getAllGenres(function (err, data) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(data);
        }
    })


};