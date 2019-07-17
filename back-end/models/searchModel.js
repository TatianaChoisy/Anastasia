var mySQL = require('../database/db');


// La méthode getAllAlbums va faire une requête à la base de données via l'import de mySQL
exports.postSearch = function (newSearch, result) {
// Objet.values me permet de transformer un objet contenant une clé et une valeur en un tableau qui contient uniquement les valeurs
    var addSearch = Object.values(newSearch);
    var table = addSearch[0] + "%";
    console.log(table);

    mySQL.query('SELECT NameArtist, ImageArtist FROM Artists WHERE NameArtist LIKE ?', [table],
        function (err, res) {
            if (err) throw err;
            result(null, res);
        })
   
}