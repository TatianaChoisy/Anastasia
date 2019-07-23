var currentsController = require("../controllers/currentsController");
var express = require("express");
var router = express.Router();

// Route avec la méthode GET
router.get('/', currentsController.displayAllCurrentsTracks);

module.exports = router;