var tameimpalaController = require("../controllers/tameimpalaController");
var express = require("express");
var router = express.Router();

// Route avec la méthode GET
router.get('/', tameimpalaController.displayAllTameImpalaAlbums);

module.exports = router;