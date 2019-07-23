var artistsController = require("../controllers/artistsController");
var express = require("express");
var router = express.Router();

router.get('/', artistsController.displayAllArtists);

module.exports = router;