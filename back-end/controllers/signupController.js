var signup = require('../models/signupModel');

var express = require('express');
var router = express.Router();

// Sign Up Handle
router.post('/signup', (req, res) => {
    const { firstname, lastname, email, email2, password, password2 } = req.body;
    let errors = [];

    // Check required fields 
    if (!firstname || !lastname || !email || email2 || password || password2) {
        errors.push({ msg: 'Please fill in all fields.' });
    }

    // Check password match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match.' });
    }

    // Check pass length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }

    if (errors.length > 0) {
        res.render('/signup', {
            errors,
            firstname,
            lastname,
            email,
            email2,
            password,
            password2

        });
      
    } else {
        res.send('pass');
    }

});

module.exports = router;