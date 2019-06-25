var signup_controller = require("../controllers/signupController");
var express = require("express");
var router = express.Router();

router.route('/signup')
    .post(signup_controller.signup);

module.exports = router;