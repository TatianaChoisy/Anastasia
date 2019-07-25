var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController');

// la route sert à préciser quel contrôleur et quelle méthode du contrôleur vont être utilisés pour traiter la requête HTTP
router.post('/', searchController.sendSearch);

module.exports = router;