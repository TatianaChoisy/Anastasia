var playlistsController = require("../controllers/playlistsController");
var express = require("express");
var router = express.Router();

router.route('/')
    .get(playlistsController.displayAllPlaylists);

module.exports = router;