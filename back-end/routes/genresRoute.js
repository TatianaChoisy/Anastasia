var genresController = require("../controllers/genresController");
var express = require("express");
var router = express.Router();

router.route('/')
    .get(genresController.Display_all_genres);

module.exports = router;