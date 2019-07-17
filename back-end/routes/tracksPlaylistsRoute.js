var tracksController = require("../controllers/tracksPlaylistsController");
var express = require("express");
var router = express.Router();

router.route('/:PlaylistsTracksID')
    .get(tracksController.displayTracksPlaylists);

module.exports = router;