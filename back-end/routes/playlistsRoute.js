var playlistsController = require("../controllers/playlistsController");
var express = require("express");
var router = express.Router();

router.route('/')
    .get(playlistsController.Display_all_playlists);

module.exports = router;