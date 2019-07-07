var signupController = require("../controllers/signupController");
var express = require("express");
var router = express.Router();

router.route('/')
    .post(signupController.signUp);

module.exports = router;