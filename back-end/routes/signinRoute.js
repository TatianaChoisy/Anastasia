var signin_controller = require("../controllers/signinController");
var express = require("express");
var router = express.Router();

router.route('/')
    .post(signin_controller.signin);

module.exports = router;