var tracksController = require("../controllers/tracksAlbumsController");
var express = require("express");
var router = express.Router();

router.route('/:AlbumID')
    .get(tracksController.displayTracksAlbums);

module.exports = router;