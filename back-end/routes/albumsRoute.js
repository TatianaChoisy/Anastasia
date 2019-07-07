var albumsController = require("../controllers/albumsController");
var express = require("express");
var router = express.Router();

router.route('/')
    .get(albumsController.Display_all_albums);

module.exports = router;