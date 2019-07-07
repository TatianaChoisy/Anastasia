var mySQL = require('../database/db');

var User = function(data) {
  this.firstname = data.firstname;
  this.lastname = data.lastname;
  this.email = data.email;
  this.pseudo = data.pseudo;
  this.password = data.password;
}

User.findUser = function (addUser, result) {
  var table = [addUser.email];

mySQL.query('SELECT * FROM Users WHERE email = ?', [table], function (err, response) {
        if (err) throw err;
        result(null, response);
  });

};

User.createUser = function (addUser, result) {
  var addUsers = Object.values(addUser);
  var table = [[addUsers[0], addUsers[1], addUsers[2], addUsers[3], addUsers[4]]];


  mySQL.query('INSERT INTO Users (firstname, lastname, email, pseudo, password) VALUES ?', [table], function (err, response) {
        if (err) throw err;
        result(null, response);
  });

};

module.exports = User;