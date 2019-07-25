var mySQL = require('../database/db');

// La méthode getAllAlbums va faire une requête à la base de données via l'import de mySQL
// result est le second paramètre de la méthode postSearch dans le controller, soit une fonction
exports.postSearch = function (newSearch, result) {

// Objet.values me permet de transformer un objet contenant une clé et une valeur en un tableau qui contient uniquement les valeurs
    var addSearch = Object.values(newSearch);
    var table = addSearch[0] + "%";
    // La valeur insérée dans l'input est concaténée avec le caractère %
    // % me sert à effectuer une recherche à partir de la valeur insérée dans l'input et envoyée du front vers le back
    console.log(table);

// LIKE me permet de faire une recherche particulière
    mySQL.query('SELECT NameArtist, ImageArtist FROM Artists WHERE NameArtist LIKE ?', [table],
        function (err, res) {
            if (err) throw err;
            result(null, res);
        })
   
}