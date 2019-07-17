var genresController = require("../controllers/genresController");
var express = require("express");
var router = express.Router();

router.route('/')
    .get(genresController.displayAllGenres);

module.exports = router;