var playlistsController = require("../controllers/playlistsController");
var express = require("express");
var router = express.Router();

router.route('/')
    .get(playlistsController.displayAllPlaylists);
router.route('/:userID')
    .get(playlistsController.displayPlaylistsFromUser);
module.exports = router;