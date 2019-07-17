var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController');

router.post('/', searchController.sendSearch);

module.exports = router;