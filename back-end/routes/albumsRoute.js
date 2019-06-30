var albums_controller = require("../controllers/albumsController");
var express = require("express");
var router = express.Router();

router.route('/')
    .get(albums_controller.Display_all_albums);

module.exports = router;