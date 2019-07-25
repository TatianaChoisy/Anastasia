var tracksController = require("../controllers/tracksPlaylistsController");
var express = require("express");
var router = express.Router();

router.route('/:PlaylistsTracksID')
    .get(tracksController.displayTracksPlaylists);
router.route('/addTrack')
    .post(tracksController.addTrack);

module.exports = router;