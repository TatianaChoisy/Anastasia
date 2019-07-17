var artistsController = require("../controllers/artistsController");
var express = require("express");
var router = express.Router();

router.route('/')
    .get(artistsController.displayAllArtists);

module.exports = router;