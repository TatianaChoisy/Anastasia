// Le controller appelle le modèle
var Search = require('../models/searchModel.js');

// Je définis et exporte la méthode Search qui sera utilisée par la route
exports.sendSearch = function (req, res) {
    var newSearch = req.body.search;

    Search.postSearch(newSearch, function (err, data) {
        if (err) res.send(err);
        else res.json(data);
    });


  };