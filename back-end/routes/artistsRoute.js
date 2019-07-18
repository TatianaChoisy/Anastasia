var artistsController = require("../controllers/artistsController");
var express = require("express");
var router = express.Router();

router.get('/', artistsController.displayAllArtists);
router.get('/:ArtistID', artistsController.displayAllArtistsAlbums);

module.exports = router;