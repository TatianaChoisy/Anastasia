var albumsController = require("../controllers/albumsController");
var express = require("express");
var router = express.Router();

// Route avec la méthode GET
router.get('/', albumsController.displayAllAlbums);

module.exports = router;