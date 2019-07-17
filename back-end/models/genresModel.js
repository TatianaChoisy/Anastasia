var mySQL = require('../database/db');

var genres = function (data) {
        this.GenreID = data.GenreID,
        this.NameGenre = data.NameGenre,
        this.ImageGenre = data.ImageGenre
}

genres.getAllGenres = function (result) {

 
    mySQL.query('SELECT * FROM Genres', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    })


}

module.exports = genres;
