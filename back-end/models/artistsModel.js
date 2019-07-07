var mySQL = require('../database/db');

var artists = function (data) {
        this.ArtistID = data.ArtistID,
        this.NameArtist = data.NameArtist,
        this.BioArtist = data.BioArtist,
        this.ImageArtist = data.ImageArtist
}

artists.getAllArtists = function (result) {

 
    mySQL.query('SELECT * from Artists', function (err, res, fields) {
        if (err) throw err;
        result(null, res);
    })


}

module.exports = artists;
