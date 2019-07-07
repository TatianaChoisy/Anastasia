var signinController = require("../controllers/signinController");
var express = require("express");
var router = express.Router();

router.route('/')
    .post(signinController.signIn);

module.exports = router;