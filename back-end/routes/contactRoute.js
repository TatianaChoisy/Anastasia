var express = require("express");
var router = express.Router();
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

router.post('/', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
            user: 'choisytatiana@gmail.com',
            clientId: '963695285275-0sp207a5um0ccq9bncbt0a6998fn6oup.apps.googleusercontent.com',
            clientSecret: 'sNLOVwfpyNXQsM50g_oVEZrZ',
            refreshToken: '1/n7dCFEEbbL9u4nAwIDFd4Eim76QOMHJl5cy2ytUDpClfm9vQs____aL_7sg1X0eh'
            
            })
    
        },
    });
    
    let mailOptions = {
        from: req.body.pseudo + '&lt;' + req.body.object +'&lt;',
        to: 'choisytatiana@gmail.com',
        subject: 'Hello World !',
        text: req.body.message
    };
    
        transporter.sendMail(mailOptions, (err, res) => {
            if (err) console.log(err);
            else console.log("The message was sent!")
            console.log(res);
        })
        
    
    });
    

module.exports = router;