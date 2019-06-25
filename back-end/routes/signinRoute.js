var signin_controller = require('../controllers/signinController');

var express = require('express');
var router = express.Router();

    
router.route('/signin')
  .get(signin_controller.signin)
  .post(signin_controller.signin);
    

module.exports = router;
