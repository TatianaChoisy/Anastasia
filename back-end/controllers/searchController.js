// Le controller appelle le modèle
var Search = require('../models/searchModel.js');

// Je définis et exporte la méthode Search qui sera utilisée par la route
exports.sendSearch = function (req, res) {
    var newSearch = req.body.search; // req.body.search est la valeur de l'input envoyée depuis le front-end

    Search.postSearch(newSearch, function (err, data) {
        if (err) res.send(err);
        else res.json(data);
    });


  };